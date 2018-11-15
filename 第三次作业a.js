
function dig(obj,target){
    for (var i in obj) 
        if(i == target)
          return console.log(obj[i]) 
        else 
          for (var i in obj[i])
              var a = obj['level1']  
          for (var i in a )
            if (i == target )
              return console.log(a[i])           
            else
              for (var i in a[i])
                  var b = a['level2']
                  if (i == target)
                    console.log(b[i])
}       
var data={
   level1:{
       level2:{
           level3: 'some data'
       }
   }
}
dig(data,'level3')
    