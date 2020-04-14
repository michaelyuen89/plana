class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.integer :user_id, null: false
      t.integer :team_id, null: false

      t.timestamps
    end

    add_index :projects, :user_id
    add_index :projects, :team_id
  end
end
