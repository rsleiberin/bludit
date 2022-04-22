Rails.application.routes.draw do
  resources :subscriptions
  resources :comments, except: [:index]
  resources :posts
  resources :categories, except: [:show]
  resources :users, only: [:show, :create]

  get "/auth", to: "users#show"
  post "/sessions", to: "session#create"
  delete "/sessions", to: "session#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
