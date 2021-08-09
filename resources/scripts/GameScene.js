class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        //adds tile for background
        this.background1 = this.add.tileSprite(0, 0, config.width, config.height, "background");

        //addsbuildings
        //this.createBuildings();
        
        //this.timer = this.time.addEvent({delay: 1500, callback: ()=>this.addBuildingFront, loop: true});
        

        this.background1.setOrigin(0,0);
        //adds sprite for moon
        this.background2 = this.add.sprite(config.width - 100, 120, "moon");
        //adds platform
        this.platform = this.add.tileSprite(config.width/2, config.height/2 + 144, config.width, 32, "platform4");
        //adds computerman
        this.character = this.add.sprite(136, config.height/2, "character");
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
    }

    update() {

    }

    // createBuildings() {
    //     this.buildingsF = this.add.group();
    //     this.buildingsM = this.add.group();
    //     this.buildingsB = this.add.group();
    //     //f
    //     this.building1 = this.add.sprite(config.width, config.height - 256, "building1");
    //     //b
    //     this.building2 = this.add.sprite(config.width, config.height - 32, "building2");
    //     //f
    //     this.building3 = this.add.sprite(config.width, config.height - 256, "building3");
    //     //m
    //     this.building4 = this.add.sprite(config.width, config.height - 128, "building4");
    //     //m
    //     this.building5 = this.add.sprite(config.width, config.height - 128, "building5");
    //     //m
    //     this.building6 = this.add.sprite(config.width, config.height - 128, "building6");

    //     this.buildingsF.add(this.building1);
    //     this.buildingsF.add(this.building3);
    //     this.buildingsB.add(this.building2);
    //     this.buildingsM.add(this.building4);
    //     this.buildingsM.add(this.building5);
    //     this.buildingsM.add(this.building6);
    // }

    // addBuildingFront() {
    //     this.randomBuildingF = Phaser.Utils.Array.GetRandom(this.buildingsF.getChildren());

    //     this.physics.add(this.randomBuildingF);

    //     this.randomBuildingF.body.velocity.x = -200;

    //     this.randomBuildingF.checkWorldBounds = true;
    //     this.randomBuildingF.outOfBoundsKill = true;

    // }
}