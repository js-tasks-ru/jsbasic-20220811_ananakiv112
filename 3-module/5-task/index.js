function getMinMax(str) {
  let arr = (str.split (' ').filter (item => !isNaN(item))).map (item => +item); 
  let minInput = Math.min(...arr);
  let maxInput = Math.max(...arr);
  return result = {
      min: minInput,
      max: maxInput
  }
}