Rails.application.routes.draw do
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

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'search', to: 'home#search'
end
