function Character(name, prof, gender, age, str, hp) {
    this.alive = true;
    this.turn = true;
    
    this.name = name;
    this.profession = prof;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(str);
    this.hitPoints = parseInt(hp);

    this.printStats = function() {
        console.log("Character Stats for: " + this.name);
        console.log(this.name + " is a " + this.age + " year old " + this.gender + " " + this.profession)
        console.log("Strength: " +  this.strength);
        console.log("Hit Points: " + this.hitPoints);
    }
    
    this.isAlive = function() {
        if (this.hitPoints > 0) {
            console.log(this.name + " is still fighting!")
            this.alive = true;
        } else {
            console.log(this.name + " has perished")
            this.alive = false;
        }
    }; 
    // ^^^ ; or , ? 
    
    this.Attack = function() {
        opponentHP = 100;
        console.log(opponentHP);
        console.log (this.name + " has attacked!")
        opponentHP = opponentHP - this.strength;
        console.log("Your Opponent's HP is now: " + opponentHP);
    };
    
    this.attackOpponent = function(enemy){
        console.log("")
        console.log("--------------------------------------")
        console.log(" ------------- BATTLE ITEM -----------")
        console.log("---------------------------------------")
        console.log(this.name + " has chosen to attack " + enemy.name);
        console.log(enemy.name + "'s " + " HP is " + enemy.hitPoints);
        console.log(this.name + " attacked " + enemy.name);
        var randomNumber = Math.floor(Math.random() * 20);
        console.log("Accuracy reading: " + randomNumber);

        if (randomNumber > 5) {
        enemy.hitPoints -= this.strength;
        console.log("Attack successful!");
        } else {
            console.log("You've missed!")
        }

        console.log(enemy.name + " HP is now " + enemy.hitPoints)
        enemy.isAlive();
        if (enemy.alive === false) {
            this.levelUp()
        }
        // enemy.hitPoints
        // alex.hitPoints = this.strength - alex.hitPoints
        console.log(" ")
        console.log("---------------------------------------")
        console.log("---------------------------------------")
        console.log(" ")
    }
    this.levelUp = function() { 
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
        console.log(" ")
        console.log("--------------------------------")
        console.log("---------ACTION ITEM-----------")
        console.log(this.name + " has leveled up! ");
        console.log(this.name + " age is now " + this.age);
        console.log(this.name + " strength is now " + this.strength);
        console.log(this.name + " HP is now " + this.hitPoints)
        console.log(" ")
        console.log("--------------------------------")
    }
    this.revive = function() {
        this.hitPoints = 100
        console.log(this.name + " has been revived!!!");
        console.log(this.name + "'s HP is now " + this.hitPoints)
    }
    this.attackLoop = function(enemy) {
        while(this.hitPoints > 0 && enemy.hitPoints > 0) {
            if (this.turn === true) {
                console.log(this.name + " attacks: " + enemy.name)
                this.attackOpponent(enemy);    
                this.turn = false;
                enemy.turn = true;
            } else if (enemy.turn === true) {
                console.log(enemy.name + " return attacks: " + this.name);
                enemy.attackOpponent(this);
                enemy.turn = false;
                this.turn = true;
            }
        } 
    }
    this.teamAttack = function(teammate, enemy){
        while(( this.hitPoints > 0 && enemy.hitPoints)|| (teammate.hitPoints > 0 && enemy.hitPoints > 0)){
            if (this.turn === true && this.alive === true) {
                console.log(this.name + " attacks " + enemy.name)
                this.attackOpponent(enemy);
                this.turn = false;
                enemy.turn = false;
                teammate.turn = true;
            } else if (teammate.turn === true && teammate.alive === true) {
                console.log(teammate.name + " attacks " + enemy.name)
                teammate.attackOpponent(enemy);
                this.turn = false;
                enemy.turn = true;
                teammate.turn = false;
            } else if (enemy.turn === true && enemy.alive === true) {
                console.log(enemy.name + " attacks " + this.name + " and " + teammate.name) 
                if (this.alive === true) {
                enemy.attackOpponent(this)
                }  else {
                    console.log("Monster goes to attack " + this.name + " but " + this.name + " is perished!")
                }
                if (teammate.alive === true) {
                enemy.attackOpponent(teammate)
                } else {
                    console.log("Monster goes to attack " + teammate.name + " but " + teammate.name + " is perished!")
                }
                this.turn = true;
                enemy.turn = false;
                teammate.turn = false;
                //Need to fix where if this.alive = false and this.turn = false, won't trigger new set of turns after enemy and teammate fight
                //Need to fix boss leveling up twice? Possibly but not necessary
            }
        }
    };
}

var evan = new Character("Evan", "Salesman", "male", 27, 100, 100);
var alex = new Character("Alex", "Advertisor", "male", 28, 100, 100);
var boss = new Character("Boss", "The Boss", "female", 100, 50, 400)

// console.log(evan);

console.log("------------PLAYER 1-----------")
console.log("")
evan.printStats();
console.log("")
console.log("-------------------------------");

console.log("------------PLAYER2------------")
console.log("")
alex.printStats();
console.log("")
console.log("-------------------------------")

console.log("------------THE BOSS------------")
console.log("")
boss.printStats();
console.log("")
console.log("-------------------------------")

console.log("--------ACTION ITEM------------")
console.log("")
evan.teamAttack(alex, boss);
console.log("")
console.log("-------------------------------")




// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.attackLoop(alex);
// console.log("")
// console.log("-------------------------------")



// console.log("--------ACTION ITEM------------")
// console.log("")
// alex.attackOpponent(evan)
// console.log("")
// console.log("-------------------------------")


// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.attackOpponent(alex)
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// alex.attackOpponent(evan)
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.attackOpponent(alex)
// console.log("")
// console.log("-------------------------------")


// console.log("--------ACTION ITEM------------")
// console.log("")
// alex.revive();
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// console.log("Waiting for next move ...")
// console.log("")
// console.log("-------------------------------")





// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.Attack();
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.isAlive();
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// alex.isAlive();
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// evan.levelUp();
// console.log("")
// console.log("-------------------------------")

// console.log("--------ACTION ITEM------------")
// console.log("")
// alex.levelUp();
// console.log("")
// console.log("-------------------------------")


// console.log("--------ACTION ITEM------------")
// console.log("")
// console.log("Waiting for next move ...")
// console.log("")
// console.log("-------------------------------")




