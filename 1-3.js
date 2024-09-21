class Bird {
    fly() {
        return "Flying";
    }
}

class Penguin extends Bird {
    fly() {
        return "Penguins can't fly!";
    }
}

class Sparrow extends Bird {
    fly() {
        return "Sparrows fly high!";
    }
}


function letBirdFly(bird) {
    console.log(bird.fly());
}

let penguin = new Penguin();
let sparrow = new Sparrow();
letBirdFly(penguin);  
letBirdFly(sparrow);  
