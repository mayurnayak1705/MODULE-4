
var array=["mayur","josh","joe","Yaakov","John","jAMES","Harry","MODI"]

for(var i=0;i<array.length;i++){
var firstLetter = array[i].charAt(0).toLowerCase();
   

if(firstLetter==='j')
   console.log("Good Bye" + " " + array[i]);

else
   console.log("Hello" + " " + array[i]);
}


 