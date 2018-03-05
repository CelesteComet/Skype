@friends.each do |friend|
  json.set! friend.id do 
    json.set! :id, friend.id
    json.set! :username, friend.username
    json.set! :status, friend.status
  end
end