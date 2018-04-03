# This json builder returns the room memberships of all friends that are currently in
# one of the rooms.
# @rooms.each do |room|
#   room.room_memberships.each do |membership|
#     json.set! membership.id do 
#       json.extract! membership, :user_id, :room_id 
#     end
#   end
# end


