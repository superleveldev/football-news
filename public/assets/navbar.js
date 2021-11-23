let topDiv = document.getElementsByClassName("top-social-media-div")[0];
let topNavDiv = document.getElementsByClassName("top-nav-div")[0];
let mobileNavDiv = document.getElementsByClassName("navlinksMobile")[0];
var mobileMenuOpen = false;

window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY
    if (scroll > 100) {
        topDiv.style.display = 'none';
        topNavDiv.style.top = '0px';
        mobileNavDiv.style.top = '80px';
    }
    else {
        topDiv.style.display = 'block';
        topNavDiv.style.top = '40px';
        mobileNavDiv.style.top = '120px';
    }
});

document.getElementById("mobileMenu").addEventListener("click", changeMobileMenu);

function changeMobileMenu() {
    var mobileNavDiv = document.getElementsByClassName("navlinksMobile")[0];
    var btn = document.getElementById("mobileMenu");
    if (mobileMenuOpen) {
        mobileNavDiv.style.display = 'none';
        mobileMenuOpen = false;
        btn.classList.remove("fa-times");
        btn.classList.add("fa-bars");
    }
    else {
        mobileNavDiv.style.display = 'block';
        mobileMenuOpen = true;
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-times");
    }
}