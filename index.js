function destructivelyAppendKitten (name) {
  const a = ["Milo", "Otis", "Garfield"];
  const b =  [...a, name];
  return b;
}