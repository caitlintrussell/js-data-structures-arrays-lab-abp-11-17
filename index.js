const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}
function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver('Broom'){
  const drivers = ['Milo', 'Otis', 'Garfield'];
  const moreDrivers = ['Broom', ...drivers];
}
appendDriver('Broom');
