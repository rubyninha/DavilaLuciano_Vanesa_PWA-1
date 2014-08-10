/*
 Name: Vanesa Dávila-Luciano
 Date: 08/10/2013
 Course: PWA I 1408 Section 01
 Assignment: Goal 1: Assignment Duel 1
 */


// Self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 50;
    var player2Damage = 50;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=1;

    function fight(){
        console.log("in the fight function");

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        //Create for loop that will reduce the player's health for each round
        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            console.log(f1);
            console.log(f2);


        };
    };

    function winnerCheck(){
        //code will go here

    };

    //The program gets started below
    console.log("program starts here");
    fight();

})();