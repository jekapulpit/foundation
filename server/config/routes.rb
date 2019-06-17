Rails.application.routes.draw do
  scope module: :api, defaults: { format: :json }, path: 'api' do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      devise_for :users, controllers: {
          registrations: 'api/v1/users/registrations',
      }, skip: [:sessions, :password]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
