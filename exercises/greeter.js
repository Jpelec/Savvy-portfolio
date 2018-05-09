var name = prompt('What is your name?');
var checkName = function (){
  if(name === "") {
    name = prompt('What is your name, for real this time?');

    checkName(); // repeats until a name exist
  }
}
checkName(); // kicks off the name-checking the first time
alert('Hello ' + name);
