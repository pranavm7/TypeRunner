class records extends Phaser.Scene{
    constructor() {
            super("records");
    }
    preload() {
        this.load.image("Leaderboard", "resources/sprites/Leaderboard.png");

    }
    create() {
        //create the score board for the game 
        
        this.Records = this.add.tileSprite(0, 0, config.width, config.height, "Leaderboard");
          
        this.Records.setOrigin(0,0);
        const fetchScore = async ()=>
        {
        try{
            let url = `https://grey2001.pythonanywhere.com/scores/?format=json`;
            let response = await fetch(url);
            if(response.ok)
            {
              let data = await response.json();
                console.log(data);
            }
            else
            {
              console.warn(` API fetch call resulted in an error.`);
            }
        }catch (err)
          {
            console.error(err);
          }
        }
        const StartButton = this.add.text(150, 800, 'start Game', { 
          fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'15px'})
          .setInteractive()
          .on("pointerdown",() => this.scene.start("bootGame"))
        
            


    }
}