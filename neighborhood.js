console.log("active")
const randomRestaurants = document.querySelector("#randomRestaurants")


const restaurants = [
    'https://www.cupbop.com/',
    'https://www.chilis.com/locations/us/utah/saratoga-springs/saratoga-springs/?utm_source=google&utm_medium=local&utm_campaign=Chilis',
    'https://crumblcookies.com/saratoga',
    'https://www.costavida.com/locations/saratoga-springs'
];
const giveRandRest = () => {
    let randomNum = Math.round(Math.random()*restaurants.length);
    location.href = restaurants[randomNum];
}

randomRestaurants.addEventListener("click", giveRandRest);