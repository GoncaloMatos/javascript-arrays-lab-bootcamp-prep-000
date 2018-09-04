function destructivelyRemoveLastKitten () {
  var a = ["Milo", "Otis", "Garfield"];
  a = var b = ["Milo", "Otis"];
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