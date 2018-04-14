var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  this.load.image('bike', 'assets/bike-vector-full.png')
}

function create(game) {
    game.stage.backgroundColor = '#fff';
  console.log('oh, hello');

  var i = game.add.image(game.world.centerX, game.world.centerY, 'bike');
  i.anchor.set(0.5);

  game.input.onDown.add(gofull, this);
}

function update() {}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}
