const favColor = document.querySelectorAll('#color');
const favPlace = document.querySelectorAll('#place');
const favRitual = document.querySelectorAll('#ritual');
const crimson = () => alert("Keldon's favorite color is Crimson");
const hawaii = () => alert("Keldon's favorite place is Hawaii");
const spaghetti = () => alert("Keldon's favorite ritual is mixing spaghetti before eating it");
favColor.addEventListener('click', crimson );
favPlace.addEventListener('click', hawaii );
favRitual.addEventListener('click', spaghetti );