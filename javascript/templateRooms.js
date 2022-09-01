const { default: fetch } = require("cross-fetch");


const API_URL = "https://hotelmirandaapi.azurewebsites.net";

const rooms = document.querySelector(".rooms");

fetch(`${API_URL}/rooms`)
  .then((response) => response.json())

  .then((rooms) => {
    console.log(rooms)


    // const template = rooms.map((room) => {
    //   `<li>
    //   <h3>${room.bed_type}</h3> 
    //   <h3>${room.rate}<small>/Night</small></h3>
    //   </li>`;
    // });
    // rooms.innerHTML = `<ul>${template}</ul>`
  });
