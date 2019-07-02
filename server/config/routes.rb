Rails.application.routes.draw do
  namespace :api do
    namespace :v4 do
      resources :scp_objects
      resources :articles
      resources :drafts
      resources :users, only: %i[show]
      resource :auth, only: %i[create]
      get '/auth/sync', to: 'auths#sync'
    end
  end
end
