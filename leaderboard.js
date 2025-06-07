
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const leaderboardList = document.getElementById('leaderboard-list');

db.collection("users").orderBy("score", "desc").limit(10).get().then(snapshot => {
  snapshot.forEach(doc => {
    const user = doc.data();
    const li = document.createElement('li');
    li.textContent = `${user.name || 'Snapper'} — ${user.score || 0} pts`;
    leaderboardList.appendChild(li);
  });
});
