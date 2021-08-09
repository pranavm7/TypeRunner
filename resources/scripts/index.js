const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [PreloadScene],
    physics: {
        default: 'arcade',
        arcade: { gravity: false}
    },
    pixelArt: true,
    backgroundColor: 0x000000,
};

//  Game Settings can go here.
// const gameSettings = {};

const game = new Phaser.Game(config);