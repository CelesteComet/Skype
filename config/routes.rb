Rails.application.routes.draw do

  # config/routes.rb
  mount ActionCable.server => '/cable'

  namespace :api, :defaults => {:format => :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
    resources :messages, only: [:create]
    resources :friendships, only: [:index, :create, :destroy]
    resources :room_memberships, only: [:index, :create, :destroy] 
    resources :rooms, only: [:index]
  end

  root 'static_pages#root'
end
