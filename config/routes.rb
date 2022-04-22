Rails.application.routes.draw do
  resources :subscriptions, only: [:create]
  resources :comments, except: [:index]
  resources :posts
  resources :categories, except: [:show]
  resources :users, only: [:show, :create]
  resources :session, only: [:create]

  get '/auth', to: 'users#show'
  delete '/sessions', to: 'session#destroy'

  # Defines the root path route ("/")
  # root "articles#index"
end
