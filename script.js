```javascript
// ==========================================
// ELECTRIC VEHICLE MARKET ANALYSIS
// JavaScript
// ==========================================


// Check whether JavaScript is working

console.log(
    "EV Market Analysis website loaded successfully."
);


// ==========================================
// NAVIGATION LINKS
// ==========================================

const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


// ==========================================
// UPDATE ACTIVE NAVIGATION LINK
// ==========================================

function updateActiveLink() {

    const currentSection =
        window.location.hash || "#home";


    navigationLinks.forEach(
        function (link) {

            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget === currentSection
            ) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        }
    );

}


// ==========================================
// NAVIGATION CLICK EVENT
// ==========================================

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navigationLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);


// ==========================================
// HASH CHANGE
// ==========================================

window.addEventListener(
    "hashchange",
    updateActiveLink
);


// ==========================================
// INITIAL ACTIVE LINK
// ==========================================

updateActiveLink();


// ==========================================
// TABLEAU LOAD MESSAGE
// ==========================================

console.log(
    "Tableau dashboards are connected."
);


// ==========================================
// PAGE LOAD MESSAGE
// ==========================================

window.addEventListener(
    "load",
    function () {

        console.log(
            "EV Market Analysis page loaded."
        );

    }
);
```