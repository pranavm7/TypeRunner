class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload()
    {
        
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
        this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
        this.load.plugin('rextagtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextagtextplugin.min.js', true);
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

        //paragraph input
    //     const text = this.add.text( 100, config.height - 200, 'Hello World', { fixedWidth: 150, fixedHeight: 36, color: '#FFFFFF' })
	//     text.setOrigin(0.5, 0.5)

	//     text.setInteractive().on('pointerdown', () => {
	// 	this.rexUI.edit(text)
	// })
        var content = this.getParagraph();
        //  var printText = this.add.rexBBCodeText
        var tags = {
            correct: {
                color: '#90ee90',
                fontSize: 14
            },
            incorrect: {
                color: '#FF4F4B',
                fontStyle: 'bold',
                fontSize: 14,
                underline: {
                    color: '#FF4F4B',
                    thickness: 5,
                }
            }
        }
        const displayText = this.add.rexTagText( 30, config.height-200, content, {
            backgroundColor: '#222222',
            fontFamily: '"Press Start 2P"',
            color: 'yellow',
            fontSize: 14,
            align: 'left',
            wrap: {mode: 'word', width: config.width -50},
            lineSpacing: 5,
            maxLines: 3,
            padding: {left: 10, right: 40, top: 20, bottom: 2},
            fixedWidth: config.width -50,
            fixedHeight: 100,
            tags: tags
        })
    
        this.incorrectFlag = false;
        const inputText = this.add.rexInputText(
            config.width -508, config.height-65,
             config.width -50, 50,{
                type: 'textarea',
                id: 'inputTxtArea',
                text: 'Input text here...',
                color: '#000000',
                fontSize: '14',
                // backgroundColor: '#111111',
                fontFamily: ' "Press Start 2P" ',
                valign: 'top',
                halign: 'left',
                maxLines: 6,
                //wrap: {mode: 'word'},
                padding: {left: 10, right: 0, top: 20, bottom: 2},
                lineSpacing : 20,
                backgroundColor: '#888888',
            }
        ).setOrigin(0.5)
         .setInteractive()
         .on('textchange', function(inputText,e){
             updateTags(inputText,displayText)
            }
            )
         .on('focus', function (inputText){
             if(inputText.text === 'Input text here...')
             {
                inputText.setText('');  
                updateTags(inputText,displayText) 
               
             }}
            )                  
            
        const updateTags = (input, display)=>{
    var inputText = input.text;
     if (inputText.text == 'Input text here...' || inputText.text == '')
    {
        this.character.x -= 3
    } 
    var currentDisplay = display.getPlainText();
    const correctTag = `<class='correct'>`
    const incorrectTag = `<class='incorrect'>`
    const closeTag = `</class>`
    var result = ``
    currentDisplay.split('').forEach( (character,index) => {
        const inputCharacter = inputText[index]
        if(inputCharacter == null){
            result += character
            // this.incorrectFlag = true;
        }
        else if(inputCharacter === character)
        {
            character = correctTag + character + closeTag
            result += character
            this.incorrectFlag = false;
        }
        else{
            character = incorrectTag + character + closeTag
            result += character
            this.incorrectFlag = true;
            this.score -= 10;
            this.character.x -= 1
        }
    })
    display.setText(result)

 }
 
        //Score updater from phaser tutorial 1
        this.score = 0;
        this.scoreLabel = this.add.bitmapText(20, 10, "pixelFont", "SCORE ", 32)
        var scoreFormatted = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormatted;

        document.getElementById("inputTxtArea").readOnly = true; 
        document.getElementById("inputTxtArea").autofocus = true; 
        //Timer functionality, initialTime decrements each second and after 5, the game can begin
        this.initialTime = 5;
        
        this.countdown = this.add.bitmapText(config.width-150, 10, "pixelFont", 'Ready? ' + this.formatTime(this.initialTime), 32);
        
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
        
        document.getElementById("inputTxtArea").readOnly = false;
        

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

        if(this.initialTime < 1)
        {
              
            if (this.incorrectFlag === true)
            {
                
                this.score -= 10;
                // Pull the character back
                // Need to end game if character collides with corruption anim
                this.character.x -= 1

                if( this.character.x - 20 === this.corruption.x + (this.corruption.width /2))
                {
                    this.scene.start("LeaderBoard")
                }

            }
            this.score += 10;
            var scoreFormatted = this.zeroPad(this.score, 6);
            this.scoreLabel.text = "SCORE " + scoreFormatted;

            if(this.score % 1000 === 0)
            {
                this.character.x += 1
            }
            // this.character.x =0
            
        }

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

    // Generates a new body of text using txtgen.js
    getParagraph()
    {
        var text = txtgen.paragraph(5);
        return text;
    }

    disableTextArea(){
        var area = document.getElementById('txtArea');
        area.readOnly = true;
        area.style.display = null;
    }

    checkInput(inputText)
    {
        console.log(inputText)
        
    }

//     logic(){
//     const quoteDisplayElement = document.getElementById('txtArea');
//     const quoteInputElement = document.getElementById('inputTxtArea')

//     quoteInputElement.addEventListener('input', () => {
//         //console.log('input detected');
//     const arrayQuote = quoteDisplayElement.querySelectorAll('span')
//     const arrayValue = quoteInputElement.value.split('')
//     console.log(arrayValue)
//    let correct = true
//     arrayQuote.forEach((characterSpan, index) => {
//     const character = arrayValue[index]
//     if (character == null) {
//       characterSpan.classList.remove('correct')
//       characterSpan.classList.remove('incorrect')
//       correct = false
//     } else if (character === characterSpan.innerText) {
//       characterSpan.classList.add('correct')
//       characterSpan.classList.remove('incorrect')
//     } else {
//       characterSpan.classList.remove('correct')
//       characterSpan.classList.add('incorrect')
//       correct = false
//     }
//   })

//   if (correct) this.renderNewQuote()
// })
//     } 
}