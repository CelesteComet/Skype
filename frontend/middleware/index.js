import React, { Component } from 'react';
import Emoji from '../components/Emoji'; 

export function convertStringToSmileyArray(string) {
  // let smileyArray = [];

  // let elems = string.split('(kiss)');
  // elems.forEach((elem, i) => {
  //   if (i !== elems.length - 1) {
  //     smileyArray.push(elem);
  //     smileyArray.push(<Emoji key={Math.random()} name='kiss' />);
  //   } else {
  //     smileyArray.push(elem);
  //   }
  // })

  // return smileyArray;

    let smileyArray = []
     
    let elems = string.split(/(\([^)]*\))/g)
    if (elems.length == 3 && elems[0] == "" && elems[2] == "" && emojiTable[elems[1]]) {
      smileyArray.push(<Emoji key={Math.random()} name={emojiTable[elems[1]]} size={100}/>);
    } else {
      elems.forEach((elem, i) => {
        if (emojiTable[elem] !== undefined) {
          smileyArray.push(<Emoji key={Math.random()} name={emojiTable[elem]} size={19}/>);
        } else {
          smileyArray.push(elem);
        }
      })
    }

    return smileyArray;
}

const emojiTable = {
  "(kiss)": "kiss",
  "(smirk)": "smirk",
  "(cool)": "cool",
  "(curse)": "curse",
  "(puke)": "puke",
  "(rainbowsmile)": "rainbowsmile"
}


export const smileyParser = store => next => action => {

  if (action.type === 'RECEIVE_MESSAGE') {

    // Check to see if the message is in the room, refactor to its own middleware
    if (Number(store.getState().ui.currentRoomId) !== action.payload.room_id) {
      return;
    }

    let body = action.payload.body;

    action.payload.body = [];
    
    let elems = body.split(/(\([^)]*\))/g)
    if (elems.length == 3 && elems[0] == "" && elems[2] == "" && emojiTable[elems[1]]) {
      action.payload.body.push(<Emoji key={Math.random()} name={emojiTable[elems[1]]} size={100}/>);
    } else {
      elems.forEach((elem, i) => {
        if (emojiTable[elem] !== undefined) {
          action.payload.body.push(<Emoji key={Math.random()} name={emojiTable[elem]} size={19} />);
        } else {
          action.payload.body.push(elem);
        }
      })
    }
  } 

  if (action.type === "RECEIVE_ROOM_MESSAGES") {
    action.payload.map(msg => {
      return msg.body = convertStringToSmileyArray(msg.body);
    });
  }

  next(action);
}

