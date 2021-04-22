# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Anime.destroy_all
Anime.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence


a1 = Anime.create(title: "Naruto", creator: "Masashi Kishimoto")
a2 = Anime.create(title: "One Piece", creator: "Eiichiro Oda")
a3 = Anime.create(title: "Dragon Ball Z", creator: "Akira Toriyama")

r1 = Review.create(body: "I love this anime, was my first ever! -Chris", reviewer: "Chris", anime_id: 1)
r2 = Review.create(body: "Everyone says this is too long to watch, but I loved it. -Matt", reviewer: "Matt", anime_id: 2)
r3 = Review.create(body: "Excellent fight scenes! -Max", reviewer: "Max", anime_id: 3)
