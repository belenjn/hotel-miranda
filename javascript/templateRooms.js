const API_URL = "http://localhost:3000";

const roomsDiv = document.querySelector(".rooms");
const description = document.querySelector(".description");
const rate = document.querySelector(".rate");

fetch(`${API_URL}/rooms`)
  .then((response) => response.json())
  .then((rooms) => {
    rooms.map((room) => {

      let divSingleRoom = document.createElement("div");

      let title = document.createElement("h1");

      let description = document.createElement("p");

      let rate = document.createElement("h5");

      let image = document.createElement("img");

      let button = document.createElement("button");

      title.appendChild(document.createTextNode(`${room.bed_type}`));

      description.appendChild(document.createTextNode(`${room.description}`));

      rate.appendChild(document.createTextNode(`$${room.rate}/Night`));

      button.appendChild(document.createTextNode(`Booking now`));

      image.src = `${room.image}`
      
      divSingleRoom.appendChild(image);

      divSingleRoom.appendChild(title);

      divSingleRoom.appendChild(description);

      divSingleRoom.appendChild(rate);

      // divSingleRoom.appendChild(button);


      roomsDiv.appendChild(divSingleRoom);
    });
  });
