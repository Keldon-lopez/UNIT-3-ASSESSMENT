console.log("profile.js")
const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');
const crimson = () => alert("Keldon's favorite color is Crimson");
const hawaii = () => alert("Keldon's favorite place is Hawaii");
const spaghetti = () => alert("Keldon's favorite ritual is mixing spaghetti before eating it");

favColor.addEventListener('click', crimson );
favPlace.addEventListener('click', hawaii );
favRitual.addEventListener('click', spaghetti );