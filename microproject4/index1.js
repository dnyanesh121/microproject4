const model = document.getElementById("myModel");
const overlay = document.getElementById("overlay");
const rulesOpenBtn = document.getElementById("rules-open-btn");
const closeModelBtn = document.getElementById("closeModelBtn");

function openModel() {
    model.style.display = "block";
    overlay.style.display = "block";
}

function closeModel() {
    model.style.display = "none";
    overlay.style.display = "none";
}

rulesOpenBtn.addEventListener('click', openModel);

closeModelBtn.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

