//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (val) => {
  if (val === "") {
    return "";
  }
  let temp = val.split("");
  
  let rna = temp.map(chr => {
     if (chr === 'G') {
       return 'C';
     }
     else if(chr === 'C') {
       return 'G';
     }
     else if(chr === 'T') {
       return 'A';
     }
     else if(chr === 'A') {
       return 'U';
     }
     else {
       return "Error";
     }
}).join("");

  return rna;
};

