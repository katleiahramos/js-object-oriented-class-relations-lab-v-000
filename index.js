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

let p
class Passengers{
  constructor(name, passengerID){
    this.name = name;
    this.passengerID = ++ passengerID
  };
};
