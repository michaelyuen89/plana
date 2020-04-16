# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  user_id     :integer          not null
#  team_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Project < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    foreign_key: :user_id

    belongs_to :team,
    foreign_key: :team_id

end
