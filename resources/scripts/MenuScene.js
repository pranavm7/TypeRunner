class MenuScene extends Phaser.Scene{
    constructor() {
        super({key: "menuScene"});
}
preload(){
    //preloading the background buildings as images
    this.load.image("Background", "resources/sprites/Background.png");
   

    }

    create(){
        var back = this.add.sprite(0,0, 'Background');
        back.setOrigin(0,0);
        var text = this.add.text(100,100, 'Welcome to my game!');

    }
   
}
export default MenuScene;
