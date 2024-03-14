class BillingController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    billing_info=Resource.all 
    render json:billing_info
  end

  def create 
    permitted_params = billing_params
    is_billable_param = permitted_params[:is_billable]
    converted_is_billable = convert_is_billable_param(is_billable_param)    
    billing = Resource.new(permitted_params.merge(is_billable: converted_is_billable))     
    if billing.save 
      redirect_to root_path 
    else
      render json: { error: billing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    emp_id = params[:emp_id]
    month_name = params[:month_name]
    is_billable_param = params[:is_billable]
    converted_is_billable = convert_is_billable_param(is_billable_param)
    billing_record = Resource.find_by(emp_id: emp_id, month_name: month_name)
    if billing_record.update(is_billable: converted_is_billable)  
      render json: { message: 'Billing information updated successfully' }, status: :ok
    else
      render json: { error: billing_record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private 

  def billing_params   
    params.require(:resource).permit(:emp_id, :month_name, :is_billable)
  end

  def convert_is_billable_param(param) 
    return param&.casecmp('Yes').zero? ? true : param&.casecmp('No').zero? ? false : nil
  end
end
