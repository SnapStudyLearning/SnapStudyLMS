
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let userId = "";
let currentCoins = 0;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    userId = user.uid;
    db.collection("users").doc(userId).get().then(doc => {
      currentCoins = doc.data().coins || 0;
      document.getElementById("coins").innerText = currentCoins;
    });
  }
});

function buyItem(item, cost) {
  if (currentCoins >= cost) {
    currentCoins -= cost;
    db.collection("users").doc(userId).update({ coins: currentCoins });
    document.getElementById("coins").innerText = currentCoins;
    document.getElementById("status").innerText = "Purchased " + item + "!";
  } else {
    document.getElementById("status").innerText = "Not enough SnapCoins!";
  }
}
