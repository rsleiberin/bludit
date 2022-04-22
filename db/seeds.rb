# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# a1 = User.create( username: "Kaleb123", password: "Kaleb123", password_confirmation: "Kaleb123")

Category.create( user_id: 1, title: "Rocks")
Category.create( user_id: 1, title: "Books")
Category.create( user_id: 1, title: "Cars")
Category.create( user_id: 1, title: "Apple")
