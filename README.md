# Readme

Please do not sue me. I love Skype. Thank you.

Live App at
https://skypii.herokuapp.com

# For Development

Within directory
1. bundle install
2. npm install
3. npm start
4. rails s
5. thank you!

All rights and stuff belongs to my Microsoft overlords

# Skypii

[Live Demo][heroku]

[heroku]: https://skypii.herokuapp.com/

Skypii is a clone of Skype. The project was created in less than two weeks (with a hackathon project in between). I made sure to create my app for future extensions because I am dead set on completing a true to life clone to the best of my abiities. Other than the usual websocket stuff, please see what features I've begun and will be adding.

## Features
  * Users can enter emoji keywords such as "(kiss)" or "(happy)" to send emojis in between text. 
  * Fully featured backend authentication allows users to see only their friends' chats and chatrooms while keeping others
    unseen unless the user has added the other user as a friend.
  * Emojis are "natively" animated. They're not just simple image of gif tags but rather animated canvas elements.
  * Search feature allows the user to fuzzy search the users database in order to add a friend.
  * Rooms can be created with a one single other user or many users.
  * The site is designed with window responsiveness in mind. 
  

### IN BETWEEN TEXT EMOJIS

I wanted to go one step further in creating emojis by allowing the user to create emojis in between text. This required me to use a custom redux middleware in which I parse the incoming message text for certain emoji keywords. 

