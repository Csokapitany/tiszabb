
//feltolto resz  Ez megy csak a szamokat stringbe viszi be
let newCharacter = {
    "charName": "",
    "charCast": "",
    "charLevel": 0,
    "charKE": 0,
    "charTE": 0,
    "charVE": 0,
    "charFP": 0,
    "charEP": 0,
    "charSFE": 0,
    "charSPJ": 0,
    "charSPB": 0,
}

    function createKarakter(){
        newCharacter.charName = document.getElementById("charName").value
        newCharacter.charCast = document.getElementById("charCast").value
        newCharacter.charLevel = document.getElementById("charLevel").value
        newCharacter.charKE = document.getElementById("charKE").value
        newCharacter.charTE = document.getElementById("charTE").value
        newCharacter.charVE = document.getElementById("charVE").value
        newCharacter.charFP = document.getElementById("charFP").value
        newCharacter.charEP = document.getElementById("charEP").value
        newCharacter.charSFE = document.getElementById("charSFE").value
        newCharacter.charSPJ = document.getElementById("charSPJ").value
        newCharacter.charSPB = document.getElementById("charSPB").value

        console.log(newCharacter)
    }


    // function caracterCard(){

    // }

    //   fetch('karakter.json')
    //     .then((response) => response.json() )
    //     .then(function (karakters) {
    //         let placeholder = document.getElementById("cardsPlace");
    //         let out = ''
    //         for(let karakter of karakters){
    //             out +=`
    //             <li> Nev: ${karakter.charName}</li>
    //             <li> Kaszt: ${karakter.charCast}</li>
    //             <li> Szint: ${karakter.charLevel}</li>
    //             <li> KE: ${karakter.charKE}</li>
    //             <li> TE: ${karakter.charTE}</li>
    //             <li> VE: ${karakter.charVE}</li>
    //             <li> FP: ${karakter.charFP}</li>
    //             <li> EP: ${karakter.charEP}</li>
    //             <li> SFE: ${karakter.charSFE}</li>
    //             <li> SPJ: ${karakter.charSPJ}</li>
    //             <li> SPB: ${karakter.charSPB}</li>    
    //             `
    //         }
    //         placeholder.innerHTML=out;
    //     console.log(cahar)
    //     } 
    //     )

        
        
            


        document.getElementById("betolt").addEventListener("click", createCard);
        function createCard() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `http://localhost:3000/karakter`, true);
          
            xhr.onload = function() {
            if(this.status === 200){
             //console.log(this.responseText)
              const karakter = JSON.parse(this.responseText);
              let output = '';
    
   karakter.forEach(function(karakter){

   
    // for(let i=0; i<karakter.lenght; i++)
    // { let adatok = document.getElementById("cardsPlace").innerHTML
    //   dynamic.innerHTML = `
    output += `       
    <div class="col-md-6 col-lg-3">
         
    <div class="card bg-success">
    <button id="Load${karakter.id}" class="btn-lg">
            <div class="card-body text-center text-dark">
                <li> Nev: ${karakter.charName}</li>
                <li> Kaszt: ${karakter.charCast}</li>
                <li> Szint: ${karakter.charLevel}</li>
                <li> KE: ${karakter.charKE}</li>
                <li> TE: ${karakter.charTE}</li>
                <li> VE: ${karakter.charVE}</li>
                <li> FP: ${karakter.charFP}</li>
                <li> EP: ${karakter.charEP}</li>
                <li> SFE: ${karakter.charSFE}</li>
                <li> SPJ: ${karakter.charSPJ}</li>
                <li> SPB: ${karakter.charSPB}</li>                    
            </div>
             Load ${karakter.id}</button>
        </div>
       
    </div>    
                                         
    `; });
               
              document.getElementById("cardsPlace").innerHTML=output;
          
            }
          }
          xhr.send();}
        
 


 function harcraFel(){



 }

 //   document.getElementById(`Load${karakter.id}`).addEventListener("click", harcraFel);
     
    



    // fetch('http://localhost:3000/karakter', {
    // method: 'post',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(newCharacter)
    // }).then(function(response) {
    //     return response.json()
    //     }).then(function(json) {
    //     console.log('parsed json: ', json)
    //     }).catch(function(ex) {
    //     console.log('parsing failed: ', ex)
    //     });
    //     };

    
        //         console.log(karakter)

        // karakter.forEach(id => {
        //     console.log(id)
        // });       