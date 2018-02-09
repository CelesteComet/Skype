import React, { Component } from 'react';


// create emojis
const emojiPaths = {
  'cool': '/emojis/default_160_anim.png'
};

const emojiImages = {};

for (let name in emojiPaths) {
  let image = new Image(180, 180);
  image.src = emojiPaths[name];
  emojiImages[name] = image;
}



class Emoji extends Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.draw = this.draw.bind(this);

    this.x = 0;
    this.y = 0;
  }

  componentDidMount() {
    // get canvas context 


    this.ctx = this.canvas.getContext('2d');
    this.init();

  }

  init() {
    let self = this;
    window.requestAnimationFrame(self.draw);
  }

  draw() {
    this.x += 1;
    this.y += 1;
    let self = this;
    //this.ctx.fillRect(this.x, this.y, 50, 50);

    this.ctx.drawImage(emojiImages['cool'], 0, 0);
    window.requestAnimationFrame(self.draw);
  }

  render() {
    return (
      <canvas 
        className='cool'
        data-id={Math.random()}
        ref={(canvas) => { this.canvas = canvas; }} >
        (cool)
      </canvas>
    );
  }
}

export default Emoji;