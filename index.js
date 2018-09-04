var a = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
  a.push(name);
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