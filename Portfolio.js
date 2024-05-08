// function for dropdown mobile menu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMobile() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("nav2item").classList.toggle("navmargin");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }

      var nav2item = document.getElementById("nav2item");
      if (nav2item.classList.contains('navmargin')) {
        nav2item.classList.remove('navmargin');
      }
    }
  }



//functions for the about me buttons

function showRight() {
    document.getElementById('about-me-content').style.display = 'block';
    document.getElementById('left-text').style.display = 'none';
}

function showTextLeft() {
    document.getElementById('about-me-content').style.display = 'none';
    document.getElementById('left-text').style.display = 'block';
}



//functions for skills section buttons -pen
function showImageEdition() {
    document.getElementById('pen-container').style.display = 'block';
    document.getElementById('badge-container').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('soft-skills-container').style.display = 'none';
}


//functions for skills section buttons -badge
function showUserExperience() {
    document.getElementById('badge-container').style.display = 'block';
    document.getElementById('pen-container').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('soft-skills-container').style.display = 'none';
}

//functions for skills section buttons -video
function showVideoEdition() {
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('badge-container').style.display = 'none';
    document.getElementById('pen-container').style.display = 'none';
    document.getElementById('soft-skills-container').style.display = 'none';
}

//functions for skills section buttons -soft skills
function showSoftSkills() {
    document.getElementById('soft-skills-container').style.display = 'block';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('badge-container').style.display = 'none';
    document.getElementById('pen-container').style.display = 'none';
}




//functions for the bita page buttons

function showRightBita() {
    document.getElementById('right-bita').style.display = 'block';
    document.getElementById('left-bita').style.display = 'none';
}

function showTextLeftBita() {
    document.getElementById('right-bita').style.display = 'none';
    document.getElementById('left-bita').style.display = 'block';
}





//function for bita page slider -first

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);





//function for bita page slider -second




//Scroll up

document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scrollUpButton");

    // Show the button when scrolling down
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });

    // Smooth scroll to the top when the button is clicked
    scrollUpButton.addEventListener("click", function () {
        scrollToTop(1000); // 1000 milliseconds (1 second) for the scrolling animation
    });

    // Function to smoothly scroll to the top of the page
    function scrollToTop(duration) {
        const start = window.pageYOffset;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scrollTo = easeInOutCubic(elapsedTime, start, -start, duration);

            window.scrollTo(0, scrollTo);

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        // Easing function for smooth animation (you can use other easing functions)
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animateScroll);
    }
});