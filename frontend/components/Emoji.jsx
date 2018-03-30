import React, { Component } from 'react';


// create emojis
const emojiPaths = {
  'cool': {path: '/emojis/cool.png', height: 6080}, 
  'kiss': {path: '/emojis/kiss.png', height: 8000},
  'crying': {path: '/emojis/crying.png', height: 8000},
  'smirk': {path: '/emojis/smirk.png', height: 5760},
  'curse': {path: '/emojis/curse.png', height: 12320},
  'puke': {path: '/emojis/puke.png', height: 12640},
  'rainbowsmile': {path: '/emojis/rainbowsmile.png', height: 8480}
};

const emojiImages = {};

for (let name in emojiPaths) {
  let image = new Image(160, emojiPaths[name].height);
  image.src = emojiPaths[name].path
  emojiImages[name] = image;
}



class Emoji extends Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.draw = this.draw.bind(this);

    // set emoji name
    this.emojiName = props.name;

    this.y = 1;

    this.frames = 0;
    this.animationSpeed = 1;
  }

  componentDidMount() {
    // get canvas context 
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.init();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.id);
  }

  init() {
    let self = this;
    window.requestAnimationFrame(self.draw);
  }

  draw() {
    this.frames += 1;
    if (this.frames > this.animationSpeed) {
      this.y += 1;
      if (this.y >= emojiPaths[this.emojiName].height / 160) {
        this.y = 0;
      }
      this.frames = 0;
    } 

    let self = this;
    //this.ctx.fillRect(this.x, this.y, 50, 50);
    this.ctx.clearRect(0,0, 500, 500);
    this.ctx.drawImage(emojiImages[this.emojiName], 
      0, 160 * this.y, 160, 160, 
      0, 0, this.canvas.height, this.canvas.width
    );
    this.id = window.requestAnimationFrame(self.draw);
  }

  render() {
    let {size} = this.props;
    return (
      <canvas 
        style={{width: size}}
        className='emoji'
        data-id={Math.random()}
        ref={(canvas) => { this.canvas = canvas; }} >
      </canvas>
    );
  }
}

export default Emoji;