class MenuScene extends Phaser.Scene{
    constructor() {
        super("menuScene");
}
preload(){
    //preloading the background buildings as images
    this.load.image("building1", "resources/sprites/Building.png");
    //preloading the font
    this.load.bitmapFont("pixelFont", "resources/font/font.png", "resources/font/font.xml");

    }

    create(){
        var back = this.add.sprite(0,0, 'building1');
        back.setOrgin(0,0);
    
        var text = this.add.text(100,100, 'Welcome To My Game!');
    }
   
}

