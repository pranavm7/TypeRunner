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
        this.load.image("background", "resources/sprites/Background.png");

        
    }

    create() {
        
        
        const helloButton = this.add.text(100, 100, 'Hello!', { fill: '#0f0' });
        helloButton.setInteractive();
        helloButton.on('pointerdown ', () => { console.log('pointerdown '); });

    
        this.scene.start("bootGame");
        
    }
   
}
//export default MenuScene;
