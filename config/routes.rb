Rails.application.routes.draw do
  post '/api/createEmployee', to: 'employee#create'
  root 'welcome#index'
end
