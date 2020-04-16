# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Team < ApplicationRecord
    validates :name, presence: true

    has_many :users,
    foreign_key: :user_id

    has_many :projects,
    foreign_key: :team_id

end
