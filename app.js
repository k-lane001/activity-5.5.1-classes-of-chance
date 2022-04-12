// ******* class ********
class Casino {
     // ******* constructor ********
    constructor (name, timesPlayed, isFakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.isFakeCoin = isFakeCoin;
    }
    // ******* method ********
    playGame(betAmount) {
        this.timesPlayed += 1;
        if(Math.random() <= 0.5) {
            console.log(this.name + ' wins!');
        } else if(this.isFakeCoin === 'true'){
                console.log(this.name + ' wins!');
        } else {
            betAmount * (this.timesPlayed + 1);
            console.log(`You won ${betAmount * (this.timesPlayed + 1) + ' from' + this.name + '!'}`);
        }
    }
    rollDie(d) {
        console.log(1+Math.floor(Math.random()*d));
    }     
};

// const myCasino = new Casino("HackerU Casino");
// console.log(myCasino);
// myCasino.playGame(5);
// myCasino.playGame(15);
// myCasino.playGame(25);
// myCasino.playGame(35);

// BONUS TESTS

// const myBonusCasino = new Casino("HackerU Bonus Casino", true);
// console.log(myBonusCasino);
// myBonusCasino.playGame(5);
// myBonusCasino.playGame(15);
// myBonusCasino.playGame(25);
// myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

