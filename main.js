// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 0;
const maxLocation = papers.length;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        papers[currentLocation].classList.add("flipped");
        papers[currentLocation].style.zIndex = currentLocation - maxLocation ;
        if (currentLocation === maxLocation - 1) {
            closeBook(false);
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 0) {
        currentLocation--;
        papers[currentLocation].classList.remove("flipped");
        papers[currentLocation].style.zIndex = maxLocation - currentLocation;
        if (currentLocation === maxLocation - 1) {
            openBook();
        }
    }
}
