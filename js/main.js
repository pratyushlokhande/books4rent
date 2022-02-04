import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";

document.addEventListener("load", () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDqhQEVd4tgYFguNN5Abnmu978EdOoBh4w",
      authDomain: "sell-books-data.firebaseapp.com",
      projectId: "sell-books-data",
      storageBucket: "sell-books-data.appspot.com",
      messagingSenderId: "731001906314",
      appId: "1:731001906314:web:6122b07efbdf009a427973",
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    console.log(db);

    console.log("ready!");

    var buy = document.getElementById("buy");
    var sell = document.getElementById("sell");
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var house_no = document.getElementById("house-no");
    var address = document.getElementById("address");
    var landmark = document.getElementById("landmark");
    var city = document.getElementById("city");
    var standard = document.getElementById("standard");
    var board = document.getElementById("board");

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      db.collection("books-data").doc().set({
        buy: buy.value,
        sell: sell.value,
        name: name.value,
        phone: phone.value,
        house_no: house_no.value,
        address: address.value,
        landmark: landmark.value,
        city: city.value,
        standard: standard.value,
        board: board.value,
        books: "",
      });
    });
})