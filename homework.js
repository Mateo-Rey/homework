let cars = []

let newCar = {
    model: 'Subaru',
    color: 'Blue',
}
newCar.year = 2004
cars.push(newCar)
let oldCar = {
    model: 'Honda',
    color: 'Silver',
    year:  1995,
}

function checkCar(car) {
    let stringCheck = Object.entries(car);
}

console.log(checkCar(newCar))