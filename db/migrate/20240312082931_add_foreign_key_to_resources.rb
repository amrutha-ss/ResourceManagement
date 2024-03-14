class AddForeignKeyToResources < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :resources, :employees, column: :emp_id

  end
end
