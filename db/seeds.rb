# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bruceUser = User.create({username: "Bruce", password: "qqqqqq", profile_id: 1})

alexUser = User.create({username: "Alex", password: "qqqqqq", profile_id: 2})

ronUser = User.create({username: "Ron", password: "qqqqqq", profile_id: 3})



firstRoom = Room.create({})
secondRoom = Room.create({})

bruceFirstRoomMembership = RoomMembership.create(room_id: 1, user_id: 1)
alexFirstRoomMembership = RoomMembership.create(room_id: 1, user_id: 2)

ronSecondRoomMembership = RoomMembership.create(room_id: 2, user_id: 3)

# give friends
Friendship.create(user_id: bruceUser.id, friend_id: 2)
Friendship.create(user_id: bruceUser.id, friend_id: 3)


