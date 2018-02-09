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


### Animated Emojis via canvas

These "gifs" are not what they seem to be. In order to create the in between text feature and to use the Skype emojis I love, I created animated canvas elements of the gifs as a React Component. The component, which I called Emoji, when mounted will use a ref of the canvas element and window.requestAnimationFrame() to animate the gif in all its smooth glory.

### Window Responsivness

As a chatapp, I fully believe that the site should be responsive even though that was not a goal. That being said, I decided to copy pixel by pixel the responsive feature of the web skype app. 

### User Fuzzy Search

My app has user fuzzy search included so that users can search for potential friends and then add them. Sadly enough, the add feature has not yet been implemented yet but I do plan to do so in the future.

### Websockets

Websockets are mainly used for messaging here but I added some more channels to extend for notifications in the future. When the user logs in, a React component manages configuring all socket connections. A connection for each room is made with the backend to authenticate users joining or sending messeges to rooms.




