// Hamburger menu selections

// Hamburger menu functionality
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

// Close menu on nav menu clicks
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

$(document).ready(function() {
    // Load the default page
    //$('#hero-content').load('pages/home.html');

    function loadPage(page) {
      $('#hero-box').show("fast");
 //     $('#hero-content').fadeOut(150, function() {
 //         $('#hero-content').load(`pages/${page}.html`, function() {
 //           $('#hero-content').fadeIn(150); 
 //         });
 //     });
        $('#hero-content').load(`pages/${page}.html`);
    }

    // Load page based on URL hash
    const hash = window.location.hash.replace('#', '');
    console.log("Current hash:", hash);
    if (hash) {
        loadPage(hash);
    }

    $('.hero-box-close-btn').on('click', function() {
        console.log("Close button clicked");
        $('#hero-box').hide("fast");
        history.replaceState(null, null, window.location.pathname + window.location.search);
    });

    // Handle navigation clicks
    $('.nav-menu a').on('click', function(e) {
        e.preventDefault();
        const page = $(this).attr('href');
        window.location.hash = page;
        loadPage(page)
    });

    // Handle back/forward navigation
    $(window).on('hashchange', function() {
      const page = window.location.hash.replace('#', '');
      if (page) {
        loadPage(page);
      } else {
        $('#hero-box').hide("fast");
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    }); 
});

// scroll to top functionality
/*
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
*/

// Theme switcher functionality
