
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(error => alert(error.message));
}
function logout() {
  firebase.auth().signOut().then(() => window.location.href = 'login.html');
}
