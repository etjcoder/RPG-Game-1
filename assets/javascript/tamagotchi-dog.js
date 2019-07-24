function digitalPals(name) {
    this.name = name;
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.status = function () {
        console.log("Status for: " + this.name);
        console.log("Hungry: " + this.hungry);
        console.log("Sleepy: " + this.sleepy);
        console.log("Bored: " + this.bored);
        console.log("Age: " + this.age);
    };
    this.feed = function () {
        if (this.hungry === true) {
            console.log("You've fed " + this.name)
            console.log(this.name + ": That was yummy!")
            this.hungry = false;
            this.sleepy = true;
            console.log(this.name + ": now I'm sleepy")
        } else {
            console.log("You've asked if " + this.name + " is hungry")
            console.log(this.name + ": No thank you I'm full")
        }
    };
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log(this.name + " has gone to sleep")
            console.log(this.name + ": Zzzzzzzz");
            this.sleepy = false;
            this.increaseAge();
            this.bored = true;
            console.log(this.name + ": now I'm bored")
        } else {
            console.log("You told " + this.name + " to go to sleep!")
            console.log(this.name + ": No way I'm not tired!!")
        }
    };
    this.play = function () {
        if (this.bored === true) {
            console.log("You started playing with " + this.name)
            console.log(this.name + ": Yay!! Let's play!")
            this.bored = false;
            this.hungry = true;
            console.log(this.name + ": now I'm hungry")
        } else {
            console.log("You've asked " + this.name + " to play!")
            console.log(this.name + " said not right now. Later?")
        }
    };
    this.increaseAge = function () {
        this.age += 1;
        console.log(this.name + ": Happy Birthday to me! I am " + this.age + " old!")
    };

}


// var pikachew = new digitalPals("Pikachew");

// // console.log(pikachew)
// pikachew.status();
// console.log("------------------")
// pikachew.play();
// console.log("------------------");
// pikachew.status();
// console.log("------------------")
// pikachew.sleep();
// console.log("------------------")
// pikachew.feed();
// console.log("------------------")
// pikachew.sleep();
// console.log("------------------")
// pikachew.status();
// console.log("------------------")
// console.log("------------------")


var dog = new digitalPals("Rosie")
console.log(dog)

dog = {
    ...dog,
    outside: false,
    bark: function () {
        console.log(this.name + ": Woof Woof!")
    },
    goOutside: function () {
        if (dog.outside === false) {
            console.log("You've let " + this.name + " outside");
            console.log(this.name + ": Yay! I love the outdoors!!");
            dog.outside = true;
        } else {
            console.log("You've initiated the goOutside function but ...")
            console.log(this.name + " is already outside!");
        }
    },
    goInside: function () {
        if (dog.outside === true) {
            console.log("You've called " + this.name + " inside");
            console.log(this.name + ": Do we have to? Fine...");
            dog.outside = false;
        } else {
            console.log("You've initiated the goInside function but...")
            console.log(this.name + " is already inside!")
        }
    },
}

console.log(dog)

// console.log("----------------------")
// dog.status();
// console.log("----------------------")
// dog.play();
// console.log("----------------------")
// // dog.status();
// console.log("----------------------")
// dog.feed();
// console.log("----------------------")
// // dog.status();
// dog.bark();
// console.log("----------------------")
// dog.goOutside();
// console.log("----------------------")
// dog.goInside();
// console.log("----------------------")
// dog.goInside();
// console.log("----------------------")
// dog.status();
// console.log("----------------------")
// dog.sleep();
// console.log("----------------------")

