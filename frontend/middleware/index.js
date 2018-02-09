import React, { Component } from 'react';
import Emoji from '../components/Emoji'; 

function convertStringToSmileyArray(string) {
  let smileyArray = [];

  let elems = string.split('(kiss)');

  elems.forEach((elem, i) => {
    if (i !== elems.length - 1) {
      smileyArray.push(elem);
      smileyArray.push(<Emoji key={Math.random()} name='kiss' />);
    } else {
      smileyArray.push(elem);
    }
  })

  return smileyArray;
}


const smileyParser = store => next => action => {

  // DYING! go through string one by one
  if (action.type === 'RECEIVE_MESSAGE') {

    let body = action.payload.body;

    action.payload.body = [];
    let elems = body.split('(kiss)');
    
    elems.forEach((elem, i) => {
      if (i !== elems.length - 1) {
        action.payload.body.push(elem);
        action.payload.body.push(<Emoji key={Math.random()} name='kiss' />);
      } else {
        action.payload.body.push(elem);
      }

    })
  } 

  if (action.type === "RECEIVE_ROOM_MESSAGES") {
    action.payload.map(msg => {
      return msg.body = convertStringToSmileyArray(msg.body);
    });
  }

  next(action);
}

export default smileyParser;