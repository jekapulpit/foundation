Rails.application.routes.draw do
  namespace :api do
    namespace :v4 do
      resources :scp_objects
      resource :auth, only: %i[create]
    end
  end
end
