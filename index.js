let store = {drivers: [], passengers: [], trips: []};

let driverID = 0;
class Driver{

  constructor(name){
    this.id = ++driverID;
    this.name = name;
    store.drivers.push(this);
  };

  // trips(){
  //   return store.trips.filter( trip => {return trip.userID === this.id})
  // }
};

let passengerID = 0;

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++ passengerID;
    store.passengers.push(this);
  };
};
