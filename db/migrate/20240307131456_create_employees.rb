class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :emp_name

      t.timestamps
    end
  end
end
