Rails.application.routes.draw do
  get "api/fetchEmployeeBilling", to: "employee#index"
  post '/api/createEmployee', to: 'employee#create'
  patch "api/editBillingInfo", to: "billing#update"
  post "api/createBilling", to: "billing#create"
  root 'welcome#index'
end
