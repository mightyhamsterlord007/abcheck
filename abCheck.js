/*
 
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

         


*/



    function abCheck(str) {

        str = str.toLowerCase();
        var counter = 0;
      
        for (let i = 0; i < str.length; i++) {
          if (str[i].charCodeAt() === 97) {
            if (str[i + 4] === 'b' || str[i - 4] === 'b') {
              counter += 1;
            }
          } else if (str[i].charCodeAt() === 98) {
             if (str[i + 4] === 'a' || str[i - 4] === 'a') {
              counter += 1;
            }
          }
        }
      
        if (counter > 0) {
          return 'true';
        } else {
          return 'false';
        }
      
      }
      





module.exports = abCheck;


