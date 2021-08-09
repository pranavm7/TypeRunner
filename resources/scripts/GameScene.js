class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background1 = this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background1.setOrigin(0,0);
    }
}