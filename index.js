function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)}
)}

function iterate(callback) {
  var bands
  bands = ["The Cure", "The Smiths", "The The"];
  bands.forEach(callback);
  return bands;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
