'use strict';

/* document.getElementById('test-button').addEventListener('click', function () {
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
}); */

const titleClickHandler = function (event) {
    const clickedElement = this;

    /* [DONE] Remove class 'active' from all links */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
        console.log('function titleClickHandler remove activeLink: ', activeLink);
    }

    /* [DONE] Add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('function titleClickHandler clickedElement: ', clickedElement);

    /* [DONE] Remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
        console.log('function titleClickHandler remove activeArticle: ', activeArticle);
    }


    /* Pick 'href' attribute from the clicked link */

    /* Match 'href' attribute with id of article */

    /* Add class 'active' to the selected article */

}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}