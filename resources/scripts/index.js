const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1024,
    height: 768,
    scene: [MenuScene, PreloadScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: { gravity: false}
    },
    pixelArt: true,
    backgroundColor: 0x000000,
    
};

//  Game Settings can go here.
// const gameSettings = {};
window.onload = function(){
    const game = new Phaser.Game(config);
}