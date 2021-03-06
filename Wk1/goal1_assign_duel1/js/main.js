/*
 Name: Vanesa Dávila-Luciano
 Date: 08/10/2013
 Course: PWA I 1408 Section 01
 Assignment: Goal 1: Assignment Duel 1
 */


// Self-executing function
(function(){

    //Print out to console the word FIGHT
    console.log("FIGHT!!!");

    //Create variables for players' names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //Create variables for players damage points
    var player1Damage = 50;
    var player2Damage = 50;

    //Create variables for players health points
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //Create a variable to initiate round
    var round=0;

    function fight(){
        //Print to console to test function
        console.log("in the fight function");

        //Alert to players to start the game
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        //Create for loop that will reduce the player's health for each round
        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);


            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //Print to console
            console.log(playerOneName+":"+playerOneHealth+"  "+playerTwoName+":"+playerTwoHealth);

            //Create  variable to give results
            var results = winnerCheck();
            //Print out results to console
            console.log(results);
            //Create conditional to determine the winner after the 10th round
            if (results==="no winner"){
                round++;
                //Alert players results on each round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
            }else {
                alert(results);
                break;
            };
        };
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        //Create variable if there is no winner
        var results="no winner";

        //Create conditional to determine if there is a winner or not
        if (playerOneHealth<1 && playerTwoHealth<1){
            results = "You Both Die";
        } else if(playerOneHealth<1){
            results =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1){
            results = playerOneName+" WINS!!!"
        };
        //Return the results
        return results;
    };

    //The program gets started below
    console.log("program starts here");
    fight();

})();