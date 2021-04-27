class Report < ApplicationRecord
  mount_uploader :avatar, AvatarUploader

  belongs_to :track
  belongs_to :user
end
