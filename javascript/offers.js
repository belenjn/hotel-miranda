const data = [

  {
    id: 40,
    room_name: "Gilbert Harbor",
    room_number: 36,
    floor_room: 3,
    bed_type: "Suite",
    facilities:
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    description:
      "pariatur exercitation officia adipisicing quis esse voluptate do officia occaecat et non veniam velit veniam enim",
    date_room: "2022-08-08 12:30:11",
    rate: 380,
    status: "true",
    image:
      "https://i.pinimg.com/originals/b6/aa/91/b6aa915a8af1139561f0b9ec24a2e5af.jpg",
  },
  {
    id: 41,
    room_name: "Meredith Meadows",
    room_number: 93,
    floor_room: 7,
    bed_type: "Double bed",
    facilities:
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    description:
      "dolore cillum minim et elit tempor cillum pariatur consequat tempor ipsum amet qui veniam anim incididunt ea Lorem ullamco do nisi culpa",
    date_room: "2021-01-09 23:53:45",
    rate: 240,
    status: "false",
    image:
      "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc=",
  },
  {
    id: 42,
    room_name: "Kian Dam",
    room_number: 86,
    floor_room: 10,
    bed_type: "Single bed",
    facilities:
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    description:
      "consequat nulla eu qui magna nostrud et voluptate cillum occaecat laboris duis deserunt officia officia ipsum cillum eiusmod est",
    date_room: "2022-12-04 02:35:01",
    rate: 831,
    status: "false",
    image:
      "https://cdna.artstation.com/p/assets/images/images/014/081/626/large/berktan-hatiboglu-modern-render1.jpg?1542377257",
  },
  {
    id: 43,
    room_name: "Ledner Plaza",
    room_number: 70,
    floor_room: 4,
    bed_type: "Suite bed",
    facilities:
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    description:
      "fugiat adipisicing adipisicing ut culpa reprehenderit fugiat ut et adipisicing laborum exercitation Lorem nisi nostrud duis exercitation occaecat laboris ipsum amet excepteur incididunt quis sit",
    date_room: "2022-07-02 14:38:21",
    rate: 889,
    status: "false",
    image:
      "https://www.berjayahotel.com/sites/default/files/hotel-category-offers/kualalumpur/offers-room-berjaya-times-square-hotel-kuala-lumpur.jpg",
  },
  {
    id: 44,
    room_name: "Jordi Plaza",
    room_number: 60,
    floor_room: 10,
    bed_type: "Double superior",
    facilities:
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi",
    description:
      "laborum culpa ipsum aliquip in eu et cupidatat anim enim enim dolore deserunt eu labore adipisicing laboris pariatur cupidatat Lorem id ex pariatur dolor esse labore",
    date_room: "2022-11-05 16:10:51",
    rate: 620,
    status: "false",
    image:
      "https://i2-prod.mylondon.news/incoming/article23105130.ece/ALTERNATES/s615/168289_WHotel-203000-London_IMG_05_0000jpeg.jpg",
  },
];

const roomsDiv = document.querySelector(".rooms__offers");

export const apiRequest = () => {
  data.map((room) => {
    let divSingleRoom = document.createElement("div");

    let title = document.createElement("h1");

    let description = document.createElement("p");

    let rate = document.createElement("h5");

    let newRate = document.createElement("h5");

    let image = document.createElement("img");

    let divInfo = document.createElement("div");

    let divTitleAndPrice = document.createElement("div");

    let button = document.createElement("button");

    title.appendChild(document.createTextNode(`${room.bed_type}`));

    description.appendChild(document.createTextNode(`${room.description}`));

    rate.appendChild(document.createTextNode(`$${room.rate}/Night`));

    newRate.appendChild(document.createTextNode(`$${room.rate - 100}/Night`));

    newRate.classList.add("redPrice");

    image.src = `${room.image}`;

    divSingleRoom.appendChild(image);

    divTitleAndPrice.appendChild(title);

    divTitleAndPrice.appendChild(rate);

    divTitleAndPrice.appendChild(newRate);

    divTitleAndPrice.classList.add("titleAndPrice__container");

    divInfo.appendChild(description);

    divInfo.appendChild(divTitleAndPrice);

    divSingleRoom.appendChild(divInfo);

    roomsDiv.appendChild(divSingleRoom);
  });
};

apiRequest();
