/* Need Help with explanination on why this isnt working
remember app.push() and P(R)EP 
function openOrSenior(data){
    // ... 
    let app = []
    console.log(data[0][0])
    for (i=0; i < data.length; i++){ 
      console.log(data[i])
      if (data[i][0] >= 55 && data[i][1] < 7){
        let app += 'Senior'
       
      }
      else {
        let app += 'Open'
        
      }
    }
      
     
    console.log(app)
}*/
function openOrSenior(data){
    // ... 
    let app = []
    
    for (let i= 0; i < data.length; i++){ 
      
      
      app[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior': 'Open'
        
      }
    return app 
    }
      
