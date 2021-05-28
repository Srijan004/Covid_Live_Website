const getTodos = async () => {

    const response = await fetch('https://api.covid19api.com/summary');


    if (response.status !== 200) {
        throw new Error('cannot fetch data');
    }

    const data = await response.json();


    return data;


};


let countri = "India";

getTodos()
    .then((data) => {

        let globalData = data.Global;


        let num = document.querySelector(".totConfNum");
        num.innerText = `${globalData.TotalConfirmed}`;

        num = document.querySelector(".totRecNum");
        num.innerText = `${globalData.TotalRecovered}`;

        num = document.querySelector(".totDeathNum");
        num.innerText = `${globalData.TotalDeaths}`;

        num = document.querySelector(".newConfNum");
        num.innerText = `${globalData.NewConfirmed}`;

        num = document.querySelector(".newRecNum");
        num.innerText = `${globalData.NewRecovered}`;

        num = document.querySelector(".newDeathNum");
        num.innerText = `${globalData.NewDeaths}`;


        let arr = data.Countries;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Country === countri) {
                let counArr = arr[i];
                console.log(countri, ':');
                break;
            }
        }


    })
    .catch(err => console.log('rejected :', err.message));

