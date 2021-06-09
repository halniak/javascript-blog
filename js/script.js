'use strict';

const titleClickHandler = function (event) {
    event.preventDefault();
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

    /* [DONE] Pick 'href' attribute from the clicked link */
    const linkAddress = clickedElement.getAttribute('href').replace('#', '');
    console.log('function titleClickHandler pick "href" attribute from ckickedElement: ', linkAddress);

    /* [DONE] Match 'href' attribute with id of article */
    const activeArticle = document.getElementById(linkAddress);
    console.log('function titleClickHandler match activeArticle ID with "href" attribute of active link: ', activeArticle);

    /* [DONE] Add class 'active' to the selected article */
    activeArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}