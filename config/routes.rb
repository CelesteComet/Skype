Rails.application.routes.draw do

  root 'static_pages#root'
  # config/routes.rb
  mount ActionCable.server => '/cable '

  namespace :api, :defaults => {:format => :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
    get '/find/:search', to: 'users#search'
    resources :messages, only: [:index, :show, :create]
    resources :friendships, only: [:index, :create, :destroy]
    resources :room_memberships, only: [:index, :create, :destroy] 
    resources :rooms, only: [:create, :index]

    get '/session', to: 'sessions#index'
    post '/makeCall', to: 'calls#send_ring'

  end

end
