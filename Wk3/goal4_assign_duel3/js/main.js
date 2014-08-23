/*
 Name: Vanesa Dávila-Luciano
 Date: 08/22/2013
 Course: PWA I 1408 Section 01
 Assignment: Duel 3
 */


// Self-executing function
(function(){

    //Print out to console the word FIGHT
    console.log("FIGHT!!!");

    //Define the DOM pieces with getElementById
    var fighter1_txt = document.querySelector("#spiderman").querySelector("p"); //variable for fighter 1
    var fighter2_txt = document.querySelector("#batman").querySelector("p");    //variable for fighter 1
    var round_txt = document.querySelector("h4");  //variable for rounds
    var button = document.getElementById("fight_btn");  //variable for button


    //Setup click event to replace pop-up window
    button.addEventListener("click", fight, false); // Used Event Listener for flexibility

    //Create array of object for both fighters
    var fighters = [
        {
            name: "Spiderman",  //index0.name
            damage:50,          //index0.damage
            health:100          //index0.health
        },
        {
            name:"Batman",      //index1.name
            damage:50,          //index1.damage
            health:100,         //index1.health
        }
    ]

    //Create a variable to initiate round
    var round = 1;

    //Initialize DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    //Function to commence fighting
    function fight(){
        //Print "Fight" to console
        console.log("FIGHT!!!");

        //Alert to players to start the game
        alert(fighter1[0] + ":" + fighter1[2] + "  *START*   " + fighter2[0] + ":" + fighter2[2]);

        //Create for loop that will reduce the player's health for each round
        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter1[1]-minDamage2)+minDamage2);


            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //Print to console
            console.log(fighter1[2]+" "+fighter2[2]);

            //Create  variable to give results
            var results = winnerCheck();
            //Print out results to console
            console.log(results);
            //Create conditional to determine the winner after the 10th round
            if (results==="no winner"){
                round++;
                //Alert players results on each round
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);
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
        if (fighter1[2]<1 && fighter2[2]<1){
            results = "You Both Die";
        } else if(fighter1[2]<1){
            results =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1){
            results = fighter1[0]+" WINS!!!"
        };
        //Return the results
        return results;
    };

    //The program gets started below
    console.log("program starts here");
    fight();

})();