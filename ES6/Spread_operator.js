const car1 = ["audi", "merc", "honda", "huyndai"];
const car2 = [...car1, "nissan","toyota"];
const car3 = [...car1, ...car2];
console.log(car1);
console.log(car2);
console.log(car3);