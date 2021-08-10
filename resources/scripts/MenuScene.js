class MenuScene extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    init(data){
        console.log(data)
        console.log("it works")
    }
    preload(){
        //preloading the background buildings as images
        this.load.image("background", "resources\sprites\Background.png");


    }

    create() {


     
      this.background1 = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background1.tilePositionY = 150;

     
      
     
      this.background1.setOrigin(0,0);
        const titleName = this.add.text(450,130,"Type Runner")

        const StartButton = this.add.text(250, 350, 'start Game', { 
        fill: 'red'})
        .setInteractive()
        .on("pointerdown",() => this.scene.start("bootGame"))

        const recordButton = this.add.text(600, 350, 'View the records', { 
            fill: 'red'})
            .setInteractive()
            .on("pointerdown",() => this.scene.start("records"))
        
        
   
}}

