function destructivelyRemoveLastKitten () {
  var a = ["Milo", "Otis", "Garfield"];
  ;
  return a;
}

const a = ["Milo", "Otis", "Garfield"];

function appendKitten (name) {
  const b =  [...a, name];
  return b;
}

function prependKitten (name) {
  const c = [name, ...a];
  return c;
}