require 'sidekiq/web'

Rails.application.routes.draw do
  root 'home#index'
  get 'hello_world', to: 'hello_world#index'

  authenticate :user do # 管理員權限
    mount Sidekiq::Web => '/sidekiq'
  end

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

  get 'search',          to: 'home#search'
  get 'privacy',         to: 'home#privacy'

  resources :tracks do
    resources :reports do
    end
  end

end
