'use strict';
{
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

    const generateTitleLinks = function () {
        /////////////////////////////////////////////////////
        console.log('function generateTitleLinks called');
        const articleSelector = '.post',
            titleSelector = '.post-title',
            titleListSelector = '.titles';

        /* [DONE] remove links upon refresh */
        let titleList = document.querySelector(titleListSelector);
        titleList.innerHTML = '';
        console.log('titleList innerHTML: ', titleList.innerHTML);

        /* [DONE] for each article */
        const articles = document.querySelectorAll(articleSelector);
        let articleLink = '';
        for (let article of articles) {
            /* [DONE] write its ID to a const */
            const articleID = article.getAttribute('id');
            console.log('ID\'s of each article: ', articleID);

            /* [DONE] find an element containing acticle's title and write it to a 
            const */
            const articleTitle = article.querySelector(titleSelector).innerHTML;
            console.log('Title of each article: ', articleTitle);

            /* [DONE] generate html code of a link and and append it to a variable */
            articleLink += '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
            console.log('each articleLink: ', articleLink);
        }

        titleList.innerHTML = articleLink;
        console.log('new titleList innerHTML: ', titleList.innerHTML);

        const links = document.querySelectorAll('.titles a');
        console.log('const links: ', links);
        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }

    generateTitleLinks();
}