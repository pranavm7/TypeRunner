const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 750,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
<<<<<<< HEAD
    scene: [PreloadScene],
=======
    scene: [MenuScene],
>>>>>>> 5749185a149762d167a07930864ef0dc46da77d5
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