//this game will have only 1 state
var GameState = {
  //load the game assets before the game starts
  preload: function() {
    this.load.image('background', 'assets/images/background-gradient.svg')
    this.load.image('arrow', 'assets/images/arrow.png')
    this.load.image('bike', 'assets/images/bike-vector-full.png')
    this.load.image('wheel', 'assets/images/wheel.png')
    this.load.image('brake', 'assets/images/disc-brake-logo.png')
  },
  //executed after everything is loaded
  create: function() {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true

    this.background = this.game.add.sprite(0, 0, 'background')

    //load bike
    this.bike = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bike')
    this.bike.anchor.setTo(0.5)
    this.bike.inputEnabled = true;
    this.bike.input.pixelPerfectClick = true;
    this.bike.customParams = {
      health: 99,
      distance: 1200
    }
    this.startInput(this.bike)

    //load wheel
    this.wheel = this.game.add.sprite(this.game.world.centerX + 183, this.game.world.centerY + 66, 'wheel')
    this.wheel.anchor.setTo(0.5)
    this.wheel.customParams = {
      health: 10,
      distance: 600
    }
    this.startInput(this.wheel)

    //load brake
    this.brake = this.game.add.sprite(this.game.world.centerX - 184, this.game.world.centerY + 66, 'brake')
    this.brake.anchor.setTo(0.5)
    this.brake.scale.setTo(0.04)
    this.brake.customParams = {
      health: 100,
      distance: 0
    }
    this.startInput(this.brake)
    //enable input
    // this.brake.inputEnabled = true;
    // this.brake.input.pixelPerfectClick = true;
    // this.brake.events.onInputDown.add(this.animateBikePart, this)

    //load arrows
    // this.leftArrow = this.game.add.sprite(60, this.game.world.centerY)
    // this.leftArrow.anchor.setTo(0.5)
    // this.leftArrow.scale.x = -1
    // this.leftArrow.customParams = {
    //   direction: -1
    // }
    //
    // this.rightArrow = this.game.add.sprite(580, this.game.world.centerY)
    // this.rightArrow.anchor.setTo(0.5)
    // this.rightArrow.customParams = {
    //   direction: 1
    // }

  },

  update: function() {
    //wheels spinnin'
    this.wheel.angle += .5
  },
  animateBikePart: function(part) {
    console.log("Hide everything and then tween the part to the center");
    console.log(part.customParams.health + ' Percent!');
  },
  startInput: function(part) {
    part.inputEnabled = true;
    part.input.pixelPerfectClick = true;
    part.events.onInputDown.add(this.animateBikePart, this)
  },
};

let game = new Phaser.Game(800, 600, Phaser.AUTO)

game.state.add('GameState', GameState);
game.state.start('GameState');
