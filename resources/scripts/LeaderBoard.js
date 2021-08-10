class LeaderBoard extends Phaser.Scene {
    constructor() {
        super("LeaderBoard");
    }

    create(){
        this.background = this.add.image(config.width - 512,config.height-390,'leaderboard');
        const p1 = this.add.text(150, 180, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const p2 = this.add.text(150, 300, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const p3 = this.add.text(150, 415, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const p4 = this.add.text(150, 525, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const p5 = this.add.text(150, 630, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const playerList = [p1,p2,p3,p4,p5]

        const score1 = this.add.text(680, 180, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const score2 = this.add.text(680, 300, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const score3 = this.add.text(680, 415, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const score4 = this.add.text(680, 525, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const score5 = this.add.text(680, 630, 'Hello World', { fontFamily: '"Press Start 2P"', color: 'yellow', fontSize:'30px' });
        const scoreList = [score1,score2,score3,score4,score5]
       
        var score = '';
        const getScore = async ()=>{
            try
     {
    let url = `https://grey2001.pythonanywhere.com/scores/?format=json`;
    
    let response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
    console.log(response)
    if(response.ok)
    {
    console.log(response)
    this.score = await response.json();   
    
    }
    else
    {
      console.warn(`API fetch call resulted in an error.`);
      
    }   
}catch (err)
{
    console.error(err);
}

}

getScore()
this.score = `[{"id":5,"username":"annamalai","score":100000000},{"id":3,"username":"PranavM","score":9999999},{"id":2,"username":"theguy","score":10000},{"id":6,"username":"monster","score":2222},{"id":1,"username":"grigsbpk","score":1000}]`
var boardList = JSON.parse(this.score)
playerList.forEach( (uname,index) =>{
    uname.setText(boardList[index]["username"])
})
scoreList.forEach( (uname,index) =>{
    uname.setText(boardList[index]["score"])
})
}
}