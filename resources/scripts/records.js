class records extends Phaser.Scene{
    constructor() {
            super("records");
    }
    preload() {
        this.load.image("leaderboard", "resources/sprites/Leaderboard.png");

    }
    create() {
        // create the score board for the game 
        
        this.background2 = this.add.tileSprite(0, 0, config.width, config.height, "leaderboard");
      

     
      
     
        this.background2.setOrigin(0,0);


    }
}