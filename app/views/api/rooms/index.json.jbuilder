@rooms.each do |room|
  json.set! room.id do 
    json.set! "users" do 
      room.users.each do |user|
        json.set! user.id do 
          json.set! "username", user.username
          json.set! "status", user.status
          json.set! "statusMsg", user.statusMsg
        end
      end
    end
    json.set! "lastMsgSent", room.messages[-1]
    json.set! "updated_at", room.updated_at
  end
end

