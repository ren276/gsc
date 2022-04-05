<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAKWQEwC7Jqe-jEZNotmNkZUhw6XPfRFow",
    authDomain: "sober-up-bf5ae.firebaseapp.com",
    projectId: "sober-up-bf5ae",
    storageBucket: "sober-up-bf5ae.appspot.com",
    messagingSenderId: "182778127143",
    appId: "1:182778127143:web:d7d048fd1e11f19351bf02",
    measurementId: "G-CS6PJFV64S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

function writeData() {
    firebase.database().ref("user").set( {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
        }

    );
}

onclick="writeData()