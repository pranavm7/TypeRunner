const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 750,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [MenuScene],
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