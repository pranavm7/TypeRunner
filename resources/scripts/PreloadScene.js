class PreloadScene extends Phaser.Scene{
    constructor() {
            super("bootGame");
    }

    preload(){
        //preloading the background buildings as images
        this.load.image("building1", "resources/sprites/Building.png");
        this.load.image("building2", "resources/sprites/Building2.png");
        this.load.image("building3", "resources/sprites/Building3.png");
        this.load.image("building4", "resources/sprites/Chapel.png");
        this.load.image("building5", "resources/sprites/Tower.png");

        //preloading the platforms as images
        this.load.image("platform1", "resources/sprites/Platform1.png");
        this.load.image("platform2", "resources/sprites/Platform2.png");
        this.load.image("platform3", "resources/sprites/Platform3.png");

        //preloading the character as a spritesheet
        this.load.spritesheet("character", "resources/sprites/Computerman-spritesheet.png", {
            frameWidth: 34,
            frameHeight: 32
        });

        //preloading the font
        this.load.bitmapFont("pixelFont", "resources/font/font.png", "resources/font/font.xml");
    }

    create(){
        //Adds loading text
        this.add.text(20, 20, "Loading game...");

        this.Scene.start("playGame");
    }

}