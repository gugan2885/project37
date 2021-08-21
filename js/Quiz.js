class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
background("yellow")
    // mam do i have to write in html or text mam
    //this.question.html("results will shown );
   // this.question.position(250, 80);
   // text("results will show");

    //call getContestantInfo( ) here
// mam they told get constant info but there was no constenant info in consentant .js so i wrote 
//get playerInfo mam;
  this.getPlayerInfo();

if(allContestants !==undefined){
  fill("Blue");
  textSize(20);
  text("Note whose Answer is Correct is highlighed",130,230)
}

    //write condition to check if contestantInfor is not undefined
if (constestantInfo!==undefined){
  //what do i have to here mam
}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
    for (var plr in allContestants){
      var correctAns="2";
      if (correctAns === allContestants[plr].answer)
      fill("Green");
      else 
      fill("red")
    }

     

    
  }

}
