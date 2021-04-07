class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :timeoutable, :trackable, :omniauthable, omniauth_providers: [:facebook]
  # relationships .............................................................
  has_many :auth_providers, dependent: :destroy

  # class methods .............................................................
  def self.from_omniauth(auth)
    auth_provider = AuthProvider.find_or_create_by(uid: auth.uid, provider: auth.provider)

    # 1. bind existing user by uid and provider
    user = bind_by_uid_and_provider(auth, auth_provider)
    return user if user

    # 2. bind existing user by email
    user = bind_by_email(auth, auth_provider)
    return user if user

    # 3. create new user
    create_from_omniauth(auth, auth_provider)
  end

  def self.bind_by_uid_and_provider(auth, auth_provider)
    user = auth_provider.user
    user.bind_omniauth(auth, auth_provider) and return user if user
  end

  def self.bind_by_email(auth, auth_provider)
    email = auth.info.email
    user = find_by(email: email)
    return unless user

    if auth_provider.user != user
      auth_provider.user = user
      auth_provider.save!
    end
    user.email = email if user.email.blank?
    user.bind_omniauth(auth, auth_provider)
    user.save!
    user
  end

  def self.create_from_omniauth(auth, auth_provider)
    user = User.new(
      email: auth.info.email,
      password: Devise.friendly_token[0, 20],
    )
    if auth_provider.user != user
      auth_provider.user = user
      auth_provider.save!
    end
    user.bind_omniauth(auth, auth_provider)
    user
  end

  # public instance methods ...................................................

  def bind_omniauth(auth, auth_provider)
    transaction do
      self.name = auth.info.name if name.blank?
      auth_provider.token = auth.credentials.token
      # self.avatar = auth.info.image + '&width=500&height=500'
      auth_provider.save!
      save!
    end
  end
end
