class PreloadScene extends Phaser.Scene{
    constructor() {
            super("bootGame");
    }

    preload(){
        //preloading the background buildings as images
        this.load.image("building1", "resources/sprites/Building1.png");
        this.load.image("building2", "resources/sprites/Building2.png");
        this.load.image("building3", "resources/sprites/Building3.png");
        this.load.image("building4", "resources/sprites/Building4.png");
        this.load.image("building5", "resources/sprites/Building5.png");
        this.load.image("building6", "resources/sprites/Building6.png");

        //preloading the background assets
        this.load.image("background", "resources/sprites/Background.png");
        this.load.image("moon", "resources/sprites/Moon.png");
        this.load.spritesheet("corruption", "resources/sprites/Corruption (1).png", {
            frameWidth: 64,
            frameHeight: 1024
        })

        //preloading the platforms as images
        this.load.image("platform1", "resources/sprites/Platform1.png");
        this.load.image("platform2", "resources/sprites/Platform2.png");
        this.load.image("platform3", "resources/sprites/Platform3.png");
        this.load.image("plaform4", "resources/sprites/Platform4.png");

        //preloading the character as a spritesheet
        this.load.spritesheet("character", "resources/sprites/Computerman-spritesheet.png", {
            frameWidth: 136,
            frameHeight: 256
        });

        //preloading the font
        this.load.bitmapFont("pixelFont", "resources/font/font.png", "resources/font/font.xml");
    }

    create(){
        //Adds loading text
        this.add.text(20, 20, "Loading game...");

        //creates animation for the character at a rate of 4 frames per second
        this.anims.create({
            key: "character_anim",
            frames: this.anims.generateFrameNumbers("character"),
            frameRate: 4,
            repeat: -1
        });

        //create corruption animation
        this.anims.create({
            key: "corruption_anim",
            frames: this.anims.generateFrameNumbers("corruption"),
            frameRate: 8,
            repeat: -1
        })

        //starts the GameScene.js after 5 seconds
        this.time.addEvent({
            delay: 500,
            callback: ()=>this.scene.start("playGame"),
            loop: false
        });
    }

    

}