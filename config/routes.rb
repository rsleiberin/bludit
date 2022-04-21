Rails.application.routes.draw do
  resources :subscriptions
  resources :comments, except: [:index]
  resources :posts
  resources :categories, except: [:show]
  resources :users, only: [:show, :create]
  get '/auth', to: 'users#show'

  # Defines the root path route ("/")
  # root "articles#index"
end
