'use strict';

/* document.getElementById('test-button').addEventListener('click', function () {
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
}); */

const titleClickHandler = function (event) {
    console.log('Link was clicked!');
    console.log(event);

    /* Remove class 'active' from all links */

    /* Add class 'active' to the clicked link */

    /* Remove class 'active' from all articles */

    /* Pick 'href' attribute from the clicked link */

    /* Match 'href' attribute with id of article */

    /* Add class 'active' to the selected article */

}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}