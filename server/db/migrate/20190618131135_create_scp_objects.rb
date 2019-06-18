class CreateScpObjects < ActiveRecord::Migration[5.2]
  def change
    create_table :scp_objects, id: false do |t|
      t.string :number, primary_key: true
      t.string :name
      t.integer :object_class, null: false
      t.string :containment_procedures
      t.string :description
      t.timestamps
    end
  end
end
