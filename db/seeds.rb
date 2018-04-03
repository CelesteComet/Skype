# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create all friends

guestUser = User.create({username: "Guest User", password: "password", profile_id: 1})
bruceUser = User.create({username: "Bruce Wong", password: "password", profile_id: 2})

User.create({username: "Donald Trump", password: "password", profile_id: 3})
User.create({username: "Barack Obama", password: "password", profile_id: 4})
User.create({username: "Larry Elison", password: "password", profile_id: 5})
User.create({username: "Conan O'Brian", password: "password", profile_id: 6})
User.create({username: "Gal Gadot", password: "password", profile_id: 7})
User.create({username: "Guy Fieri", password: "password", profile_id: 8})
User.create({username: "Emma Watson", password: "password", profile_id: 9})
User.create({username: "Natalie Portman", password: "password", profile_id: 10})


User.create({username: "Darth Vadar", password: "password", profile_id: 11})
User.create({username: "James Bond", password: "password", profile_id: 12})
User.create({username: "Frederik Chopin", password: "password", profile_id: 13})
User.create({username: "秦始皇", password: "password", profile_id: 14})
User.create({username: "Elon Musk", password: "password", profile_id: 15})

# im in room 1
# RoomMembership.create(room_id: 1, user_id: 1)
# RoomMembership.create(room_id: 2, user_id: 1)
# RoomMembership.create(room_id: 3, user_id: 1)
# RoomMembership.create(room_id: 45, user_id: 1)

# # three different rooms
# RoomMembership.create(room_id: 1, user_id: 2)
# RoomMembership.create(room_id: 1, user_id: 8)
# RoomMembership.create(room_id: 1, user_id: 3)

# RoomMembership.create(room_id: 2, user_id: 4)
# RoomMembership.create(room_id: 2, user_id: 9)

# RoomMembership.create(room_id: 45, user_id: 2)
# RoomMembership.create(room_id: 45, user_id: 8)
# RoomMembership.create(room_id: 45, user_id: 3)

# give friends
Friendship.create(user_id: guestUser.id, friend_id: 2)
Friendship.create(user_id: guestUser.id, friend_id: 3)
Friendship.create(user_id: guestUser.id, friend_id: 4)
Friendship.create(user_id: guestUser.id, friend_id: 5)
Friendship.create(user_id: guestUser.id, friend_id: 6)
Friendship.create(user_id: guestUser.id, friend_id: 8)
Friendship.create(user_id: guestUser.id, friend_id: 9)

Friendship.create(user_id: guestUser.id, friend_id: 10)
Friendship.create(user_id: guestUser.id, friend_id: 11)
Friendship.create(user_id: guestUser.id, friend_id: 12)
Friendship.create(user_id: guestUser.id, friend_id: 13)
Friendship.create(user_id: guestUser.id, friend_id: 14)
Friendship.create(user_id: guestUser.id, friend_id: 15)

Friendship.create(user_id: bruceUser.id, friend_id: 1);
Friendship.create(user_id: bruceUser.id, friend_id: 8);
Friendship.create(user_id: bruceUser.id, friend_id: 3);



