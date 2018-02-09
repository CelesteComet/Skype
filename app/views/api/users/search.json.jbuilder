@users.each do |user|
  json.set! user.id do 
    json.set! :id, user.id
    json.set! :username, user.username
  end
end