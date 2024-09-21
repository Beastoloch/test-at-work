class Car {
    constructor(brand, model) {
        this._brand = brand;  //Приватные атрибуты принято называть с “_”, их использование вне класса не рекомендуется, хотя возможно.
        this._model = model;         
        this._fuelLevel = 0;
    }

    refuel(amount) {
        if (amount <= 0) {
            console.log("Введите кол-во топлива.");
            return;
        }
        this._fuelLevel += amount;
        console.log(`Заправлено: ${amount} литров. Уровень топлива: ${this._fuelLevel} литров.`);
    }

    checkFuelLevel() {
        console.log(`Уровень топлива: ${this._fuelLevel} литров.`);
    }

    drive(distance) {
        const fuelNeeded = distance * 0.1;

        if (fuelNeeded > this._fuelLevel) {
            console.log("Недостаточно топлива для поездки.");
        } else {
            this._fuelLevel -= fuelNeeded;
            console.log(`Вы проехали ${distance} км. Уровень топлива теперь: ${this._fuelLevel} литров.`);
        }
    }
}
