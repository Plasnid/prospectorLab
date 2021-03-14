/*
    * In the old west, prospectors were people who would search for gold in rivers by "panning" the sediment.
    * They would use a metal seive to get rocks and silt from the bottom of the river and strain out the sand
    * to find gold
    * 
    * In this activity, we are building a virtual search for gold.  The player has a set number of rounds before 
    * a flood roars down the river.  Each time we pan a section of the river for gold, it takes 1 round.
    * 
    * Each time the player pans a square, they have a chance of finding(chanceOfFinding) an amount(amt) of gold
    * if the area has not already been checked(collected).
    * 
    * Using a while loop, we will have the game run itself
    * 
    * 1. connect the script to the html by adding the script tag in the html file.
*/

/* 
    * 2. Create the following variables using let
    * a variable for how many rounds long the game is(eg. 5)
    * a variable for what number of round the player is on, that starts at 0
    * a variable for how much gold the player has, which will start at 0
*/

/*
    * 3. create 6 more rows for values for theRiver, each should be an array of 3 objects like the one shown
*/
let theRiver = [
    [{chanceOfFinding:.5,amt:2,collected:false},{chanceOfFinding:.3,amt:10,collected:false},{chanceOfFinding:.9,amt:1,collected:false}]
    ]
// * now we will create a nested loop in this function that will calculate the total of all the gold in the river and store it
function totalGoldInRiver(){
    // * 4. create a variable using camelCase that will hold the sum of the gold.  Start it at 0
    
    
    // * 5.  Create a nested for loop which will let us add the amt in each part of the river to our sum of gold
    

    // * 6. after the nested for loop completes, console log the value of all the gold in the river 
    
};
// * 7. call totalGoldInRiver 



function findGold(){
    //* 8. create a value called riverLength that holds the length of the array(do not hardcode, use the length command)
    
    //* 9. create a value called riverWidth that holds the length of the array at theRiver[0] 
    //* as before, do not hardcode the value, find it with array.length
    

    //* 10. have the while loop check if the current round is less than the maximum round
    while( < ){
        //* the next 2 lines randomly grab co-ordinate values
        let lengthCoord = Math.floor(Math.random()*riverLength);
        let widthCoord = Math.floor(Math.random()*riverWidth);
        //* 11. Use the coordinate values to get a value from the array and console log it
        let riverSpot = theRiver[what coordinate goes here?][what coordinate goes here?];
        //* Here we get a random number.  It is like rolling dice in a game.
        let goldChance = Math.random();

        /* 
            * 12. 
            * fill in if statement to check if the goldChance is greater than the chance of finding gold in the spot
            * and
            * if the spot has not been collected yet
        */
        if(  &&  ){
            /* 
                * 13.
                * if you find the gold, and the spot has not been collected, add it to your gold
                * and console log how much gold you found, as well as your total.
            */
            
            
        }else{
            /*
                * otherwise console log that you didn't find the gold
                * to make it extra fun, make your phrase sound like a cowboy would say it 
            */ 
            
        }
        // * 14. increase the current round by 1

        // * 15. console.log how much gold you found!
        
    }
};
// * 16. call the findGold function
