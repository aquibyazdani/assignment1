var array = [1, 2, 3, 3, 4, 5, 45, 45, 56, 56],
  i = 0,
  unique = {},
  repeated = [];
while (i < array.length) {
  unique[array[i]] = unique[array[i]] ? (unique[array[i]] += 1) : 1;
  if (unique[array[i]] === 2) repeated.push(array[i]);
  i++;
}

console.log(repeated);