import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDqhQEVd4tgYFguNN5Abnmu978EdOoBh4w",
    authDomain: "sell-books-data.firebaseapp.com",
    projectId: "sell-books-data",
    storageBucket: "sell-books-data.appspot.com",
    messagingSenderId: "731001906314",
    appId: "1:731001906314:web:6122b07efbdf009a427973"
    };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore()


// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDqhQEVd4tgYFguNN5Abnmu978EdOoBh4w",
//     authDomain: "sell-books-data.firebaseapp.com",
//     projectId: "sell-books-data",
//     storageBucket: "sell-books-data.appspot.com",
//     messagingSenderId: "731001906314",
//     appId: "1:731001906314:web:6122b07efbdf009a427973"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const db = firebase.firestore()
// </script>
