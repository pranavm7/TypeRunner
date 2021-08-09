class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        //adds tile for background
        this.background1 = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background1.setOrigin(0,0);
        //adds sprite for moon
        this.background2 = this.add.sprite(config.width - 100, 120, "moon");
        //adds computerman
        this.character = this.add.sprite(136, config.height/2, "character");
        //adds corruption
        this.corruption = this.add.sprite(32, config.height/2, "corruption");
        //adds platform
        this.platform1 = this.add.sprite(128, config.height/2 + 128, "platform1");

        //adds animations
        this.character.play("character_anim");
        this.corruption.play("corruption_anim")
    }
}