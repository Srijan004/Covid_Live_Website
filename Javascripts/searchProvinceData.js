const getTodos1 = async () => {

    const response = await fetch(`https://api.covid19api.com/live/country/${countri1}`);

    if (response.status !== 200) {
        document.querySelector("#myHeading").innerText = "Invalid Country";
        throw new Error('cannot fetch data');

    }

    const data = await response.json();

    return data;


};

let state = "Tamil Nadu";
let countri1 = "India";

let swd = document.querySelector(".sumbiter");

swd.addEventListener("click", () => {
    state = document.querySelector(".userState").value;
    countri1 = document.querySelector(".userCountry").value;


    getTodos1()
        .then((data) => {
            console.log(data);
            if (data.length == 0) {
                document.querySelector("#myHeading").innerText = "Invalid Country";
                return;
            }

            let i;
            let arr = [];
            let j = 0;
            for (i = data.length - 1; j !== 2 && i >= 0; i--) {

                if (data[i].Province === state) {
                    arr[j] = data[i];
                    j += 1;
                }

            }



            final = arr[0];
            init = arr[1];

            if (final === undefined) {
                document.querySelector("#myHeading").innerText = "Invalid State";
            }

            else {
                document.querySelector("#myHeading").innerText = "Covid data of the above State";
            }


            let x = final.Deaths;
            let y = document.querySelector(".totDeathNum");
            y.innerText = `${x}`;

            x = final.Confirmed;
            y = document.querySelector(".totConfNum");
            y.innerText = `${x}`;

            x = final.Recovered;
            y = document.querySelector(".totRecNum");
            y.innerText = `${x}`;

            x = final.Deaths - init.Deaths;
            y = document.querySelector(".newDeathNum");
            y.innerText = `${x}`;

            x = final.Recovered - init.Recovered;
            y = document.querySelector(".newRecNum");
            y.innerText = `${x}`;

            x = final.Confirmed - init.Confirmed;
            y = document.querySelector(".newConfNum");
            y.innerText = `${x}`;


        })
        .catch(err => console.log('rejected :', err.message));
});



