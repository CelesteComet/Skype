Rails.application.routes.draw do

  # config/routes.rb
  mount ActionCable.server => '/cable'

  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
    resources :messages, only: [:create]
    resources :room_memberships, only: [:index, :create, :destroy] 

  end

  root 'static_pages#root'
end
