//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
class Car extends Vehicle {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger (number) {
        if (number + this.passenger <= this.maximumPassengers) {
            if((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = number;
                return this.passenger;
            }
            else {
                return this.model + " " + this.make + " doesn't have enough seats"
            }
        }
        else {
            return this.model + " " + this.make + " is already full"
        }
    }
    start() {
        if (this.fuel > 0) {
            start === true
            return "Engine has started"
        }
        else {
            return "No fuel"
        }
    }
    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService === true
            return this.scheduleService;
        }
    }
}
let v = new CanvasRenderingContext2D.start.Vehicle("Mecury", "Sedan", "1965", "Blue", "4000");
v.start()
v.loadPassenger(5)
v.checkService()
console.log(v.make)
