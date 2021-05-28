
function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude0 = position.coords.latitude;
            longitude0 = position.coords.longitude;
            const getTodos2 = async () => {

                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude0}+${longitude0}&key=1f8aaebee43341eaa98a2011cfae34bc`);

                if (response.status !== 200) {
                    throw new Error('cannot fetch data');
                }

                const data = await response.json();


                return data;


            };


            getTodos2()
                .then((data) => {

                    myCountry = data.results[0].components.country;
                    myState = data.results[0].components.state;

                    let x0 = document.querySelector(".myAddress");
                    x0.innerText =
                        `

Latitude  : ${latitude0}

Longitude : ${longitude0}

District  : ${data.results[0].components.state_district}

State     : ${data.results[0].components.state}

Country   : ${data.results[0].components.country}

`
                    const getTodos4 = async () => {

                        let url = `https://api.covid19api.com/live/country/${myCountry}`;
                        const response = await fetch(url);


                        if (response.status !== 200) {
                            throw new Error('cannot fetch data');
                        }

                        const data = await response.json();


                        return data;


                    };

                    getTodos4()
                        .then((data) => {
                            console.log(data);

                            let i;
                            let arr = [];
                            let j = 0;
                            for (i = data.length - 1; j !== 2; i--) {

                                if (data[i].Province === myState) {
                                    arr[j] = data[i];
                                    j += 1;
                                }

                            }

                            console.log(arr[0]);
                            console.log(arr[1]);

                            final = arr[0];
                            init = arr[1];
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
                })
                .catch(err => console.log('rejected :', err.message));

        });


    }
    else {
        alert("User Denied Geolocation");
    }
}
navigator.geolocation.watchPosition(function (position) {
    console.log("i'm tracking you!");
    document.querySelector("#myh3").innerText = "Covid Data of the above State";
},
    function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            document.querySelector("#myh3").innerText = "User Denied Geolocation";


        }
    });

let latitude0;
let longitude0;
let myCountry = "Brazil";
let myState;
getLocation();

