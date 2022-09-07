class User {
    constructor (name) {
        this.name = name;
    }
    sayHi(){
        console.log(this.name)
    }
}


let userIvan = new User ('Ivan');
let userKolya = new User ('Kolya');

console.log (userIvan.name, userKolya.name)






class driver extends User {
    type = 'driver'
}

let driverSasha = new driver ('Sasha')

console.log (driverSasha.name)




class car {
    constructor (number) {
        this.number = number;
    }
    getInfo(){
        console.log(this.number)
    }
}

let driverCar = new car ('2942TA-7');

console.log (driverCar.number )





class admin extends User {
    type = 'admin'
}