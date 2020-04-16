class AddIndexTeamId < ActiveRecord::Migration[5.2]
  def change
    add_index :projects, :team_id
  end
end
