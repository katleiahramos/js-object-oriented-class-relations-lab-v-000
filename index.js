let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
class Driver{

  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  };


  trips(){
    return store.trips.find( trip => {
      return trip.id === this.tripId;
    });
  };
};

let passengerId = 0;

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++ passengerId;
    store.passengers.push(this);
  };
};

let tripId = 0;
class Trip{
  constructor(driver, passenger){
    this.id = ++ tripId;
    store.trips.push(this);

    if(driver){
      this.driverId = driver.id;
    };
    if(passenger){
      this.passengerId = passenger.id;
    };
  };

  passenger(){
    return store.passengers.find( passenger => {
        return passenger.id === this.passengerId;
    });
  };

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  };
};
