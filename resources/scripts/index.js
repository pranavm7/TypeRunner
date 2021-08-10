const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1024,
    height: 768,
    scene: [MenuScene, PreloadScene, GameScene],
    parent: 'phaser-container',
    physics: {
        default: 'arcade',
        arcade: { gravity: false}
    },
    dom: {
        createContainer: true
    },
    pixelArt: true,
    backgroundColor: 0x000000,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

//  Game Settings can go here.
// const gameSettings = {};
window.onload = function(){
    const game = new Phaser.Game(config);
}