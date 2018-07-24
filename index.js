let trips = {drivers: [], passengers: []};

let driverID = 0;
class Driver{

  constructor(name, driverid){
    this.id = ++driverID;
    this.name = name;
    trips.drivers.push(this);
  };

  // trips(){
  //
  // }
};

// class Passengers{
//
// };
