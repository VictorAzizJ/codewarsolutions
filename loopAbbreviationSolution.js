/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/



function abbrevName(name){
  
    const ab = [name[0]]
    for(let i = 0; i < name.length; i++) {
      console.log(name[i])
        if(name[i] === " ") {
            ab.push(name[i + 1]);
        }
    }
    return ab.map(ans => ans.toUpperCase()).join(".")
}