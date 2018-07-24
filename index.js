let store = {drivers: [], passengers: []};

let driverID = 0;
class Driver{

  constructor(name, driverid){
    this.id = ++driverID;
    this.name = name;
    store.drivers.push(this);
  };

  trips(){

  }
};

// class Passengers{
//
// };
