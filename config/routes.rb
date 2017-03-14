Rails.application.routes.draw do
  root to: 'home#index'
  resources :shortens
  get '/:id' => 'shortens#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
