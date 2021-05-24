Rails.application.routes.draw do

  resources :sessions
  
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :records do
          resources :days
        end
      end
    end
  end
  
      
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
