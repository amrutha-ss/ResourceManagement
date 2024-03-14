class CreateResources < ActiveRecord::Migration[7.0]
  def change
    create_table :resources do |t|
      t.bigint :emp_id
      t.string :month_name
      t.integer :year
      t.boolean :is_billable

      t.timestamps
    end
  end
end
