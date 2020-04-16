# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

u1 = User.create!({name: 'june', email: "june@gmail.com", password: "password"})
t1 = Team.create!({name: 'team1', description: 'team dummy'})
p1 = Project.create!({name: 'project1', description: "test project", user_id: u1.id, team_id: t1.id})
