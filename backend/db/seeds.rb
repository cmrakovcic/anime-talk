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
User.destroy_all
User.reset_pk_sequence


# a1 = Anime.create(title: "Naruto", creator: "Masashi Kishimoto", user_id: 1)
# a2 = Anime.create(title: "One Piece", creator: "Eiichiro Oda", user_id: 2)
# a3 = Anime.create(title: "Dragon Ball Z", creator: "Akira Toriyama", user_id: 3)

# r1 = Review.create(body: "I love this anime, was my first ever!", reviewer: "Chris", anime_id: 1, user_id: 1)
# r2 = Review.create(body: "Everyone says this is too long to watch, but I loved it", reviewer: "Tom", anime_id: 2, user_id: 2)
# r3 = Review.create(body: "Excellent fight scenes", reviewer: "Max", anime_id: 3, user_id: 3)

u1 = User.create(username: "cmrak", email: "cmrakovcic@aol.com", password: "cm012397")
u2 = User.create(username: "mattmrak", email: "mattmrakovcic@aol.com", password: "mm122195")
u3 = User.create(username: "bmrak", email: "bmrak@aol.com", password: "bm100599")