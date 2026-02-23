//arrays
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'pued'];
let exte=['.com', '.net', '.us', '.io', '.es'];

let arrayWords=[];

for (let l = 0; l < exte.length; l++) {
  for (let j = 0; j < adj.length; j++) {
    for (let i = 0; i < pronoun.length; i++) {
      for (let k = 0; k < noun.length; k++) {      
        arrayWords=pronoun[i]+adj[j]+noun[k]+exte[l];
        console.log(arrayWords);
      }
    }
  }
}