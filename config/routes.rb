Rails.application.routes.draw do
  root 'home#index'
  get 'hello_world', to: 'hello_world#index'

  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: "users/registrations",
    sessions: "users/sessions",
    passwords: "users/passwords"
  }
  devise_scope :user do
    get '/users', to: 'users/registrations#new'
    get '/users/password', to: "users/passwords#new"
  end

  get 'search', to: 'home#search'

  resources :tracks do
    resources :reports do
    end
  end

end
