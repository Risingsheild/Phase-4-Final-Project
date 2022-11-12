Rails.application.routes.draw do

  resources :reviews
  resources :platforms, only: [:index, :show, :create]
  resources :games, only: [:index, :show, :create]
  resources :users, only: [:index, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get '/me', to: 'users#show'
  get '/signup', to: 'users#create'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
