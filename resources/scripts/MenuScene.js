class MenuScene extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
   
    preload(){
        //preloading the background buildings as images
        this.load.image("leaderboard", "resources/sprites/Leaderboard.png");
        
        this.load.image("background", "resources/sprites/Background.png");

    }

    create() {


     
      this.titleScreen = this.add.tileSprite(0, 0, config.width, config.height, "background");
      

     
      
     
      this.titleScreen.setOrigin(0,0);
        const titleName = this.add.text(450,130,"Type Runner")

        const StartButton = this.add.text(250, 350, 'start Game', { 
        fill: 'red', fontSize:'30px'})
        .setInteractive()
        .on("pointerdown",() => this.scene.start("bootGame"))

        const recordButton = this.add.text(600, 350, 'View the records', { 
            fill: 'red', fontSize:'30px'})
            .setInteractive()
            .on("pointerdown",() => this.scene.start("LeaderBoard"))
        
        
   
}}

