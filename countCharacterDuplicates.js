/*const orderedCount = function (text) {
    // Implement me!
    let result = [];
    for (let i = 0; i < text.length; i++){
      let count = 0;
      for ( let j = 0 ; j  result.length; i++){
        if (j[0] === text[i]){
          count ++
        }
        else if (count === 0){
          for (let j = i; j <= text.length; j++){
            if (text[j] == text[i]){ 
              count++
              
            }
          }
        }
      } 
      
      console.log(count)
  
     
    }*/

    var orderedCount = function (text) 
{
  var arr=[];
  for (var i=0; i<text.length; ++i)
  {
     var k=0;
     for (var j=0; j<arr.length; ++j)
        if (arr[j][0]==text[i])
            k++;
      if (k==0)
      {
        for (var j=i; j<text.length; ++j)
          if (text[j]==text[i])
             k++;
          arr.push([text[i],k]);
       }
  }
  return arr;

}

