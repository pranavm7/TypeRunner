class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        //adds tile for background
        this.background1 = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background1.tilePositionY = 150;

        //addsbuildings
        // this.createBuildings();
        
        //this.timer = this.time.addEvent({delay: 1500, callback: ()=>this.building1 = this.add.sprite(config.width, config.height - 256, "building1"), loop: true});
        //this.building1 = this.add.sprite(config.width, config.height - 256, "building1")

        this.background1.setOrigin(0,0);
        //adds sprite for moon
        this.background2 = this.add.sprite(config.width - 100, 120, "moon");

        //buildings
        this.building2 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building9 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building10 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building11 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building12 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building13 = this.add.sprite(config.width, config.height - 260, "building2");
        this.building8 = this.add.sprite(config.width, config.height - 250, "building6");
        this.building3 = this.add.sprite(config.width, config.height - 500, "building3");
        this.building6 = this.add.sprite(config.width, config.height - 300, "building6");
        this.building5 = this.add.sprite(config.width, config.height - 360, "building5");
        this.building4 = this.add.sprite(config.width, config.height - 350, "building4");
        this.building1 = this.add.sprite(config.width, config.height - 300, "building1");
        
        this.building7 = this.add.sprite(config.width, config.height - 350, "building1");
        
        
        
        
        //adds platform
        this.platform = this.add.tileSprite(config.width/2, config.height/2 + 144, config.width, 32, "platform4");
        //adds computerman
        this.character = this.add.sprite(200, config.height/2, "character");
        //adds corruption
        this.corruption = this.add.sprite(32, config.height/2, "corruption");


        //adds animations
        this.character.play("character_anim");
        this.corruption.play("corruption_anim")


        //adds box for scoring
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 40);
        graphics.lineTo(0, 40);
        graphics.lineTo(0, 0)
        graphics.closePath();
        graphics.fillPath();


        //black box for the paragraph text
        var graphics2 = this.add.graphics();
        graphics2.fillStyle(0x000000, 1);
        graphics2.beginPath();
        graphics2.moveTo(0, config.height);
        graphics2.lineTo(config.width, config.height);
        graphics2.lineTo(config.width, config.height-230);
        graphics2.lineTo(0, config.height-230);
        graphics2.lineTo(0, config.height);
        graphics2.closePath();
        graphics2.fillPath();

        //Score updater from phaser tutorial 1
        this.score = 0;
        this.scoreLabel = this.add.bitmapText(20, 10, "pixelFont", "SCORE ", 32)
        var scoreFormatted = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormatted;


        //Timer functionality, initialTime decrements each second and after 5, the game can begin
        this.initialTime = 5;

        this.countdown = this.add.bitmapText(config.width-150, 10, "pixelFont", 'Ready? ' + this.formatTime(this.initialTime), 32);

        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

        

    }

    update() {
        //animate background
        this.background1.tilePositionX += .5;
        //animate platform
        this.platform.tilePositionX += 5;

        //sends buildings to the moveBuilding function
        this.moveBuilding(this.building1, 4);
        this.moveBuilding(this.building2, 1);
        this.moveBuilding(this.building3, 2);
        this.moveBuilding(this.building4, 3.5);
        this.moveBuilding(this.building5, 3.75);
        this.moveBuilding(this.building6, 2.3);
        this.moveBuilding(this.building7, 4.5);
        this.moveBuilding(this.building8, 1.8);
        this.moveBuilding(this.building9, 1.1);
        this.moveBuilding(this.building10, .8);
        this.moveBuilding(this.building11, 1.1);
        this.moveBuilding(this.building12, 1.3);
        this.moveBuilding(this.building13, 1.2);





    }

    // createBuildings() {
    //     this.buildingsF = this.add.group();
    //     this.buildingsM = this.add.group();
    //     this.buildingsB = this.add.group();
    //     // //f
    //     // this.building1 = this.add.sprite(config.width, config.height - 256, "building1");
    //     // //b
    //     // this.building2 = this.add.sprite(config.width, config.height - 32, "building2");
    //     // //f
    //     // this.building3 = this.add.sprite(config.width, config.height - 256, "building3");
    //     // //m
    //     // this.building4 = this.add.sprite(config.width, config.height - 128, "building4");
    //     // //m
    //     // this.building5 = this.add.sprite(config.width, config.height - 128, "building5");
    //     // //m
    //     // this.building6 = this.add.sprite(config.width, config.height - 128, "building6");

    //     this.buildingsF.add("building1");
    //     this.buildingsF.add("building3");
    //     this.buildingsB.add("building2");
    //     this.buildingsM.add("building4");
    //     this.buildingsM.add("building5");
    //     this.buildingsM.add("building6");
    // }

    // addBuildingFront() {
    //     this.randomBuildingF = Phaser.Utils.Array.GetRandom(this.buildingsF.getChildren());

    //     this.physics.add(this.randomBuildingF);

    //     this.randomBuildingF.body.velocity.x = -200;

    //     this.randomBuildingF.checkWorldBounds = true;
    //     this.randomBuildingF.outOfBoundsKill = true;

    // }

    //adds parallax to chosen buildings
    moveBuilding(building, speed) {
        building.x -= speed;
        if (building.x < -100) {
            this.resetBuildingPos(building);
        }
    }

    //places the buildings in the front of the queue
    resetBuildingPos(building) {
        building.x = config.width + (Math.random()%10 *1000);
    }

    //Formats the time in seconds
    formatTime(seconds){
        // Minutes
        
        // Seconds
        this.partInSeconds = seconds%60;
        // Adds left zeros to seconds
        this.partInSeconds = this.partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        if (seconds < 1){
            return '';
        }
        return `${this.partInSeconds}`;
    }

    //updates timer each time the coundown updates
    onEvent ()
    {
        if(this.initialTime == 1) {
            this.initialTime -= 1;
            this.countdown.setText('Go!');
            
        } else if (this.initialTime < 1) {
            this.countdown.setText('');
        } 
        else {
            this.initialTime -= 1; // One second
            this.countdown.setText('Ready? ' + this.formatTime(this.initialTime));
        }
         

    }

    //zeropad function for the score from phaser tutorial 1
    zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
            stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }
    
}