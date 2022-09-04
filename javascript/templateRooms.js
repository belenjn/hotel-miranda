
// const API_URL = "https://hotelmirandaapi.azurewebsites.net";

// const rooms = document.querySelector(".rooms");

// export const apiRequest = async () => {
//   try {
//     const response = await fetch(API_URL + "/rooms", {
//       method: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": `${API_URL}`,
//         "Access-Control-Allow-Credentials": true
//       },
//     });
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse)
//       return jsonResponse;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// apiRequest()

// // const template = rooms.map((room) => {
// //   `<li>
// //   <h3>${room.bed_type}</h3>
// //   <h3>${room.rate}<small>/Night</small></h3>
// //   </li>`;
// // });
// // rooms.innerHTML = `<ul>${template}</ul>`
