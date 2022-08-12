const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdEL = document.querySelector(".pswd-el");

 let pwd1 = "";
 let pwd2 ="" ;
 let alive = 0 ;
function gen()
{
    if(alive !=1){
    let len = document.getElementById("length").value ;
     alive =1 ;
       if(len > 15)
       {
         len =15;
       }
      for(let i = 0 ; i<len;i++)
      {
     let ran1 = Math.floor(Math.random() * characters.length) ;
     let ran2 = Math.floor(Math.random() * characters.length) ;
    
     //  console.log(characters[ran1]);
      // console.log(characters[ran2]);
       
     pwd1 +=characters[ran1];
     pwd2 +=characters[ran2];
   //  let sp = "        " ;
     pswdEL.textContent = pwd1 + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'    +    pwd2 ;
      }
    }

    else
    {
        pswdEL.textContent = " ";
       
    }
    //   console.log(pwd1);
   // console.log(pwd2);
    
}
