const array = [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1];
const consecutiveOnes = (array = []) => {
   let left = 0;
   let right = 0;
   let max = 0;
   while (right < array.length) {
      if (array[right] === 0) {
         if (right - left > max) {
            max = right - left
         };
         right++;
         left = right;
      } else {
         right++
      };
   };
   return right - left > max ? right - left : max;
}
console.log(consecutiveOnes(array));