type Product = {
    ingredients: "potato" | "tomato";
    id: number
}

type Product1 = keyof Product
type Product1Another= "ingrediennts" | "id"

type Date1 ={
    date: string
}

type NewProduct = Product & Date1



 
interface IPoint {
    id: number;
    x: number;
    y: number;
    scale: (n:number) => void
}

interface IcolorPoint extends IPoint  {
    color: string;
}

class Point implements IPoint {
    id = 1
    x = 10;
    y = 20
    scale (n:number) : void {
        this.x = this.x * n
        this.y = this.y  * n
    }
}

class ColoredPoint extends Point {

}
let ColoredPoint1 = new ColoredPoint()
console.log(ColoredPoint1.id)




//generic
let obj5 = {a: 1, b: 2, c: 3}
function GetProperty < T, K extends keyof T > (obj: T, key: K){
    return obj[key]
}
console.log (GetProperty(obj5, "a"))

function identity < T> (arg: T): T {
    return arg
}
console.log (identity ('sasha'))


// 1.создать строку из названия стран
// 2. общее количество людей в массиве стран
// 3.создать функцию, которая пинимала бы массив стран и сортировала их по названию
// 4. получить массив валют
// 5.создать массив городов в алфавитном порядке
// 6. функция принимает массив стран и выдающая среднюю численность

type Country = {
    country: string,
    abb: string,
    city: string,
    currency_name: string,
    population: number
}

const countries: Country[] = [
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
]


function GetCountriesString (countries:Country[]):string {
    let str = "";
    countries.forEach((country,index)=> {
        let IsLast:boolean =countries.length-1 === index 
        let NewStr = IsLast? country.country : country.country + ", " ;
        str= str + NewStr
    })
    return str
}
console.log(GetCountriesString(countries))

function OverAllPopulation (countries:Country[]):number {
    // let popul= 0
    // countries.forEach((country)=>{
    //     popul = popul + country.population  })
    //     return popul
    return countries.reduce((acc:number, country:Country)=>{
        return acc+= country.population
    },0)
}
console.log(OverAllPopulation(countries))

function GetSortByName (countries:Country[]): any {
    let newArray = countries.slice(0)
    return newArray.sort(function(a,b) {
        var x = a.country.toLowerCase();
        var y = b.country.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
}
console.log(GetSortByName(countries))


function GetCurrencyMassive (countries:Country[]):any{
    let massive = ""
    countries.forEach((country, index)=>{
        let isLast:boolean = countries.length - 1 === index
        let newMassive = isLast ? country.currency_name : country.currency_name + ","
        massive += newMassive
    })
    return massive
}
console.log(GetCurrencyMassive(countries))


function GetSortCitiesByName (countries:Country[]):any {
    let massive = ""
    countries.forEach((country, index)=> {
        let isLast:boolean =  countries.length - 1 === index
        let newMassive = isLast? country.city : country.city + " "
        massive += newMassive; 
    })
    return massive.split(' ')
}
console.log(GetSortCitiesByName(countries))

function GetAveragePopulation (countries:Country[]){
    let AveragePopulation:number = 0
    countries.forEach((country,index)=>{
        AveragePopulation+= country.population
    })
    return AveragePopulation
}
console.log (GetAveragePopulation(countries))