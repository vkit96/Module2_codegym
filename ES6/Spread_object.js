const car1 = {
    Brand: "BMW",
    Color: "white"
}
const car2 = {
    Brand: "AUDI",
    Color: "black",
    Year: 2014}
const cars = {...car1,...car2}

console.log(cars);
