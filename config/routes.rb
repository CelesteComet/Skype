Rails.application.routes.draw do

  # config/routes.rb
  mount ActionCable.server => '/cable'

  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
    resources :messages, only: [:create]

  end

  root 'static_pages#root'
end
