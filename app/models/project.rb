class Project < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    foreign_key: :user_id

    belongs_to :team,
    foreign_key: :team_id

end
