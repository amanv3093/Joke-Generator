let text=document.getElementById("text");
        let btn=document.getElementById("btn").addEventListener(("click"),()=>{
            printjoke();
        });

      function printjoke(){
        text.innerText="Updating..."
      let key="HRalinWTij6o5bG0seXPxDnQBzNP1LwegEocoJxT";
       const xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.api-ninjas.com/v1/jokes?limit=1')
        xhr.setRequestHeader('x-Api-Key',key)
        xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        response.forEach(element => {
                text.innerText=element.joke;
            });
            
        
      
        }
        xhr.onerror = () => { console.log("Error occured!") }
        xhr.send() 
    }
