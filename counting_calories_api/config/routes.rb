Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      post '/login', to: 'auth#create'
        get '/current_user', to: 'auth#show'
        post '/sign_up', to: 'users#create'
      resources :users do
        resources :records do
          resources :days
        end
      end
    end
  end
  
      
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
