function destructivelyAppendKitten (name) {
  var a = ["Milo", "Otis", "Garfield"];
  var b = name;
  return a+b;
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