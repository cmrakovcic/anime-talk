Rails.application.routes.draw do
  root "sessions#home"

  get '/animes' => 'animes#index'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'

  resources :animes do
    resources :comments
  end

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
