Rails.application.routes.draw do

  resources :reviews
  resources :platforms, only: [:index, :show, :create]
  resources :games, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'

  #get '/first/:word', to: 'reviews#firstReview'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
