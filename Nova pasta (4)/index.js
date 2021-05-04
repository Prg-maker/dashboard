async function myFunction(x, y) {
   if( x % y == 0 ){
        console.log(x) 


    }else{
        while(x % y !== 0){
            x++
            console.log(x) 
        }

   }
}
myFunction( 7, 3)
 
