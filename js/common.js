function pigLatin(str) {
   str = str.toLowerCase().split(' ');
   let tmp = "";

   for(let i = 0; i < str.length; i++) {
      let search = str[i].search(/[aeiuo]/);

      switch(search) {
        case 0: // if we found consonant word
         tmp += str[i] += "way";
         break;
        case -1: // else
         tmp += str[i] += "ay";
         break;
        default:
          tmp += str[i].replace(/([^aeiou]*)([aeiou])(\w+)/, " $2$3$1ay ");
          break;
      }
  }

  return tmp;
}

string = "amber pig do you know how it work?";
console.log(pigLatin(string));
document.getElementById('result').innerHTML = `pigLatin("amber pig do you know how it work?") result: ${pigLatin(string)}`;
