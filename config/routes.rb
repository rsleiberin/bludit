Rails.application.routes.draw do
  resources :comments, except: [:index]
  resources :posts
  resources :categories, except: [:show]
  resources :users, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
