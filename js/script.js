'use strict';
const articleSelector = '.post',
  titleSelector = '.post-title',
  titleListSelector = '.titles',
  articleTagsSelector = '.post-tags .list',
  tagLinksSelector = '.post-tags a';
{
  const titleClickHandler = function (event) {
    console.log('function titleClickHandler called');
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
    console.log('clickedElement: ', clickedElement);

    /* [DONE] Remove class 'active' from all active articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
      console.log('function titleClickHandler remove activeArticle: ', activeArticle);
    }

    /* [DONE] Pick 'href' attribute from the clicked link */
    const linkAddress = clickedElement.getAttribute('href').replace('#', '');
    console.log('pick "href" attribute from ckickedElement: ', linkAddress);

    /* [DONE] Match 'href' attribute with id of article */
    const activeArticle = document.getElementById(linkAddress);
    console.log('match activeArticle ID with "href" attribute of active link: ', activeArticle);

    /* [DONE] Add class 'active' to the selected article */
    activeArticle.classList.add('active');
  };

  const generateTitleLinks = function (customSelector = '') {
    console.log('function generateTitleLinks called');

    /* [DONE] remove links upon refresh */
    let titleList = document.querySelector(titleListSelector);
    titleList.innerHTML = '';
    console.log('titleList innerHTML: ', titleList.innerHTML);

    /* [DONE] for each article */
    const articles = document.querySelectorAll(articleSelector + customSelector);
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
  };

  const generateTags = function () {
    console.log('function generateTags called');

    /* find all articles */
    const articles = document.querySelectorAll(articleSelector);
    console.log('articles: ', articles);

    /* START LOOP: for every article: */
    for (let article of articles) {
      console.log('article: ', article);

      /* find tags wrapper */
      const tagsWrapper = article.querySelector(articleTagsSelector);
      console.log('tagsWrapper: ', tagsWrapper);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('data-tags: ', articleTags);

      /* split tags into array */
      const tagsArray = articleTags.split(' ');
      console.log('tagsArray: ', tagsArray);

      /* START LOOP: for each tag */
      for (let tag of tagsArray) {

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log('linkHTML: ', linkHTML);

        /* add generated code to html variable */
        html += linkHTML;

        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      console.log('html var: ', tagsWrapper.innerHTML);

      /* END LOOP: for every article: */
    }
  };

  /* const tagClickHandler = function (event) {
    console.log('function tagClickHandler called');
    event.preventDefault();
    const clickedElement = this; */

  /* extract tag from the attribute "href" of the clicked element */
  /* const tag = clickedElement.getAttribute('href').replace('#tag-', '');
  console.log('tag of clickedElement: ', tag); */

  /* find all active tags */
  /* const activeTags = document.querySelectorAll(tagLinksSelector + '.active');
  console.log('tagLinksSelector + .active: ', tagLinksSelector + '.active');
  console.log('activeTags: ', activeTags); */

  /* remove class 'active' from all active tags */
  /* for (let activeTag of activeTags) {
    activeTag.remove('active');
    console.log('remove active class from tag: ', activeTag)
  } */

  /* add class 'active' to articles that have a clicked tag variable */
  /* const matchingTagLinks = document.querySelectorAll('[data-tags~="' + tag + '"]');
  console.log('[data-tags~=' + tag + ']', matchingTagLinks);
  matchingTagLinks.classList.add('active');

  generateTitleLinks(matchingTagLinks); */

};

const addClickListenersToTags = function () {
  console.log('function addClickListenersToTags called');

  /* find all links */
  let allTagsLinks = document.querySelectorAll(tagLinksSelector);

  /* for each link add tagClickHandler click listener */
  for (let tagLink of allTagsLinks) {
    tagLink.addEventListener('click', tagClickHandler);
    console.log('tagLink: ', tagLink);
  }
};

generateTitleLinks();
generateTags();
  //addClickListenersToTags();


}
