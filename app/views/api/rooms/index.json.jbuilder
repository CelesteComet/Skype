@rooms.sort_by {|r| r["updated_at"] }.each do |room|
  json.set! room.id do 
    json.set! "users" do 
      json.array!(room.users) do |user|
        json.user user.username
        json.status user.status
        json.statusMsg user.statusMsg
      end
    end
    json.set! "lastMsgSent", room.messages[-1]
  end
end