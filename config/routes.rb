Rails.application.routes.draw do
  get "api/fetchEmployee", to: "employee#index"
  post '/api/createEmployee', to: 'employee#create'
  root 'welcome#index'
end
