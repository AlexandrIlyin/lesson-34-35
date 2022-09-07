"use strict";
class Point {
    constructor() {
        this.id = 1;
        this.x = 10;
        this.y = 20;
    }
    scale(n) {
        this.x = this.x * n;
        this.y = this.y * n;
    }
}
class ColoredPoint extends Point {
}
let ColoredPoint1 = new ColoredPoint();
console.log(ColoredPoint1.id);
//generic
let obj5 = { a: 1, b: 2, c: 3 };
function GetProperty(obj, key) {
    return obj[key];
}
console.log(GetProperty(obj5, "a"));
function identity(arg) {
    return arg;
}
console.log(identity('sasha'));
const countries = [
    {
        country: "Belarus",
        abb: "BLR",
        city: "Minsk",
        currency_name: "Reks",
        population: 9000000
    },
    {
        country: "Russia",
        abb: "Rus",
        city: "Moscow",
        currency_name: "Rubl",
        population: 123103100
    },
    {
        country: "Polish",
        abb: "RL",
        city: "Warsawa",
        currency_name: "Zloty",
        population: 12310324
    }
];
function GetCountriesString(countries) {
    let str = "";
    countries.forEach((country, index) => {
        let IsLast = countries.length - 1 === index;
        let NewStr = IsLast ? country.country : country.country + ", ";
        str = str + NewStr;
    });
    return str;
}
console.log(GetCountriesString(countries));
function OverAllPopulation(countries) {
    // let popul= 0
    // countries.forEach((country)=>{
    //     popul = popul + country.population  })
    //     return popul
    return countries.reduce((acc, country) => {
        return acc += country.population;
    }, 0);
}
console.log(OverAllPopulation(countries));
function GetSortByName(countries) {
    let newArray = countries.slice(0);
    return newArray.sort(function (a, b) {
        var x = a.country.toLowerCase();
        var y = b.country.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
}
console.log(GetSortByName(countries));
function GetCurrencyMassive(countries) {
    let massive = "";
    countries.forEach((country, index) => {
        let isLast = countries.length - 1 === index;
        let newMassive = isLast ? country.currency_name : country.currency_name + ",";
        massive += newMassive;
    });
    return massive;
}
console.log(GetCurrencyMassive(countries));
function GetSortCitiesByName(countries) {
    let massive = "";
    countries.forEach((country, index) => {
        let isLast = countries.length - 1 === index;
        let newMassive = isLast ? country.city : country.city + " ";
        massive += newMassive;
    });
    return massive.split(' ');
}
console.log(GetSortCitiesByName(countries));
function GetAveragePopulation(countries) {
    let AveragePopulation = 0;
    countries.forEach((country, index) => {
        AveragePopulation += country.population;
    });
    return AveragePopulation;
}
console.log(GetAveragePopulation(countries));
