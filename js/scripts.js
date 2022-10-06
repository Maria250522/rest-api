'use strict';

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station/';


const getWeather = async city => {

    try{
        const response = await fetch(`${baseUrl}${city}`);
        const data = await response.json();

        console.log(data);

        return data;

    } catch(err) {
        console.error(err);
    }
}

getWeather('').then(data => {

    let weather = data;
    
    weather.forEach((element) =>{

        let tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${element.stacja}</td>
            <td>${element.data_pomiaru}</td>
            <td>${element.temperatura}</td>
            <td>${element.wilgotnosc_wzgledna}</td>
        
        `;

        document.querySelector('table tbody').appendChild(tr);
    })



});