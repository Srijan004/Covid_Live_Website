
const getTodos1 = async () =>{

    const response = await fetch(`https://api.covid19api.com/live/country/${countri1}`);
        
        
        if (response.status !== 200)
        {
            throw new Error('cannot fetch data');
        }
    
        const data = await response.json();
    
        
        return data ;
     
    
    };
    
    let state ="Tamil Nadu";
    let countri1 = "India";
    
    let swd = document.querySelector(".sumbiter");
    
    swd.addEventListener("click",() =>{
    state = document.querySelector(".userState").value;
    countri1 = document.querySelector(".userCountry").value;
   
   
    getTodos1()
          .then((data) => {
    // console.log(data);
    
let i;
let arr = [];
let j=0;
for(i=data.length - 1; j !== 2 ; i--)
{

    if(data[i].Province === state)
{
arr[j] = data[i];
j += 1;
}

}

final=arr[0];
init=arr[1];
// let cnfTot =final.Confirmed - init.Confirmed;
// let deathsTot =(final.Deaths - init.Deaths);
// let outpt = document.getElementById("ans");
// outpt.innerText = `
// New Deaths : ${deathsTot}
// New Confirmed : ${cnfTot}
// `;

let x =final.Deaths ;
let y = document.querySelector(".totDeathNum");
y.innerText  = `${x}`;         

x =final.Confirmed;
y = document.querySelector(".totConfNum");
y.innerText  = `${x}`;        

x =final.Recovered;
y = document.querySelector(".totRecNum");
y.innerText  = `${x}`;        

x =final.Deaths - init.Deaths;
y = document.querySelector(".newDeathNum");
y.innerText  = `${x}`;        

x =final.Recovered - init.Recovered;
y = document.querySelector(".newRecNum");
y.innerText  = `${x}`;        

x =final.Confirmed - init.Confirmed;
y = document.querySelector(".newConfNum");
y.innerText  = `${x}`;        



// console.log(state,':');
// console.log('New Deaths :',final.Deaths - init.Deaths);
// console.log('New Confirmed :',final.Confirmed - init.Confirmed);
// console.log('New Recovered :',final.Recovered - init.Recovered);
// console.log(' ');


    // console.log('new deaths = ', data[data.length-1].Deaths - data[data.length-2].Deaths );
    
            //       console.log('New Confirmed Cases = ',data[data.length-1].Confirmed - data[data.length-2].Confirmed )
    
                  
            //       console.log('New Recovered Cases = ',data[data.length-1].Recovered - data[data.length-2].Recovered )
     
                        //    let target = document.getElementById('tgt');
        //    target.innerText  += `
        //    New Deaths     : ${data.Global.NewDeaths}
        //    Country       : ${data.Countries[76].Country}
        //    New Confirmed : ${data.Countries[76].NewConfirmed}
           
          // `;
             
          })
          .catch(err => console.log('rejected :', err.message));
    });
    
    

    
    