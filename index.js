const app = "I don't do much."
//var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name){
   kittens=[...kittens,name];
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens=[name,...kittens];
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return 
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return 
}
function appendKitten(name){
  var kit=[...kittens,name];
  return kit;
}
function prependKitten(name){
  var kit=[name,...kittens];
  return kit;
}

function removeLastKitten(){
  var kit=kittens.slice(0,kittens.length-1);
  return kit;
}
function removeFirstKitten(){
  var kit=kittens.slice(1,kittens.length);
  return kit;
}
removeLastKitten();