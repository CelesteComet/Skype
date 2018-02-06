@room_memberships.each do |room_membership|
  json.set! room_membership.id do 
    json.set! :room_id, room_membership.room_id
    json.set! :user_id, room_membership.user_id
  end
end