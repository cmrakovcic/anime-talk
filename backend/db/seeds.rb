# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "abc123", email: "abc123@aol.com", password: "hello")

animes = Anime.create(title: "Naruto")
animes = Anime.create(title: "One Piece")
animes = Anime.create(title: "Dragon Ball Z")

comment = Comment.create(user_id: 1, anime_id: 1, content: "This is the first anime I have watched")