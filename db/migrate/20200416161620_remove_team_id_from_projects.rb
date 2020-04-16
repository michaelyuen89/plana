class RemoveTeamIdFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :team_id

    add_column :projects, :team_id, :integer
  end
end
