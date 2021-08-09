class MenuScene extends Phaser.Scene{

    constructor(){
        super("mainMenu");
    }

    preload() {

    }

    create() {
        this.scene.start("bootGame");
    }
}