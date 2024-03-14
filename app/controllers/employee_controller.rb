class EmployeeController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
    employee_data = Employee.all
    billing_data=Resource.all
    combined_data = { employee_data: employee_data, billing_data: billing_data }
    render json: combined_data
  end
  
  def create
    employee = Employee.new(employee_params)
    
    if employee.save 
      redirect_to root_path 
    else
      render json: { error: employee.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private 
  def employee_params
    params.require(:employee).permit(:emp_name)
  end   
end
