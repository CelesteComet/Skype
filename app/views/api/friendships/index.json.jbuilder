@friends.each do |friend|
  json.set! friend.id do 
    json.set! :username, friend.username
  end
end