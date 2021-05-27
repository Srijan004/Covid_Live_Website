// let countri= "Brazil";
const getTodos = async () =>{

// const response = await fetch('https://api.covid19api.com/live/country/india');
// countri = 'india';

const response = await fetch('https://api.covid19api.com/summary');
    
    
    if (response.status !== 200)
    {
        throw new Error('cannot fetch data');
    }

    const data = await response.json();

    
    return data ;
 

};


let countri = "India";

// let swd = document.getElementById("sumbiter");

// swd.addEventListener("click",() =>{
// state = document.getElementById("state").value;
// countri1 = document.getElementById("cntry").value;




getTodos()
      .then((data) => {
        
// console.log(data);
let globalData = data.Global;

// let gblTgt = document.getElementById("worldata");
// gblTgt.innerText = `Global Data
// New Deaths : ${globalData.NewDeaths}
// New Recovered : ${globalData.NewRecovered}
// New Confirmed : ${globalData.NewConfirmed}
// Total Death : ${globalData.TotalDeaths}
// Total Recovered : ${globalData.TotalRecovered}
// Total Confirmed : ${globalData.TotalConfirmed}
// `


let num = document.querySelector(".totConfNum");
num.innerText = `${globalData.TotalConfirmed}` ;

num = document.querySelector(".totRecNum");
num.innerText = `${globalData.TotalRecovered}` ;

num = document.querySelector(".totDeathNum");
num.innerText = `${globalData.TotalDeaths}` ;

num = document.querySelector(".newConfNum");
num.innerText = `${globalData.NewConfirmed}` ;

num = document.querySelector(".newRecNum");
num.innerText = `${globalData.NewRecovered}` ;

num = document.querySelector(".newDeathNum");
num.innerText = `${globalData.NewDeaths}` ;




console.log('Global Data :');
console.log('New Deaths :',globalData.NewDeaths);
console.log('New Recovered :',globalData.NewRecovered);
console.log('New Confirmed ',globalData.NewConfirmed);
console.log('Total Death ',globalData.TotalDeaths);
console.log('Total Recovered ',globalData.TotalRecovered);
console.log('Total Confirmed ',globalData.TotalConfirmed);
console.log(' ');
let arr = data.Countries;
for(let i=0;i<arr.length;i++)
{
    if(arr[i].Country === countri) 
    {
        // console.log(arr[i]);
             let counArr=arr[i];
                 console.log(countri,':');
             console.log('New Deaths :',counArr.NewDeaths);
             console.log('New Recovered :',counArr.NewRecovered);
             console.log('New Confirmed ',counArr.NewConfirmed);
             console.log(' ');
             
            break;
    }
}

// console.log('country : ',countri);
//         console.log('new deaths = ', data[data.length-1].Deaths - data[data.length-2].Deaths );

//               console.log('New Confirmed Cases = ',data[data.length-1].Confirmed - data[data.length-2].Confirmed )

              
//               console.log('New Recovered Cases = ',data[data.length-1].Recovered - data[data.length-2].Recovered )
 
        //    let target = document.getElementById('tgt');
    //    target.innerText  += `
    //    New Deaths     : ${data.Global.NewDeaths}
    //    Country       : ${data.Countries[76].Country}
    //    New Confirmed : ${data.Countries[76].NewConfirmed}
       
      // `;
         
      })
      .catch(err => console.log('rejected :', err.message));


    //   $(".totalConirmed gloalStats").on(
    //     {
    //         mouseleave: function () {
                
    //         }



    //     })



// Country: "India"
// CountryCode: "IN"
// Date: "2021-05-17T08:56:26.124Z"
// ID: "85fa473a-2e6b-43b9-9f9b-b452fe1af3bb"
// NewConfirmed: 281386
// NewDeaths: 4106
// NewRecovered: 378741
// Premium: {}
// Slug: "india"
// TotalConfirmed: 24965463
// TotalDeaths: 274390
// TotalRecovered: 21174076

      