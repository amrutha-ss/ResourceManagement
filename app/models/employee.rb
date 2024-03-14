class Employee < ApplicationRecord
    has_many :resources
    validates :emp_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: " allows only letters " }
end
