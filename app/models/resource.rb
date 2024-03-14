class Resource < ApplicationRecord
    belongs_to :employee,  foreign_key: 'emp_id'
    
    validates :emp_id, uniqueness: { scope: :month_name }

    validates :is_billable, inclusion: { in: [true, false] }

end
