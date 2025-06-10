
let numVisits = Number(localStorage.getItem("numVisits")) || 0;
numVisits++;
localStorage.setItem("numVisits", numVisits);