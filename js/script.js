'use strict';
const articleSelector = '.post',
  titleSelector = '.post-title',
  titleListSelector = '.titles',
  tagsSelector = '.post-tags .list',
  tagLinksSelector = '.post-tags a',
  authorSelector = '.post-author',
  consoleFunctionStyle = 'background: #000; font-weight: 700; color: #fff;';
{
  const titleClickHandler = function (event) {
    console.log('%c function titleClickHandler called', consoleFunctionStyle);
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
    console.log('%c function generateTitleLinks called ', consoleFunctionStyle);

    /* [DONE] remove links upon refresh */
    let titleList = document.querySelector(titleListSelector);
    titleList.innerHTML = '';
    console.log('titleList innerHTML: ', titleList.innerHTML);

    /* [DONE] for each article */
    const articles = document.querySelectorAll(articleSelector + customSelector);
    console.log('articleSelector + customSelector: ', articleSelector + customSelector);
    console.log('selected atricles: ', articles);

    let articleLink = '';
    for (let article of articles) {
      /* [DONE] write its ID to a const */
      const articleID = article.getAttribute('id');
      //console.log('ID\'s of each article: ', articleID);

      /* [DONE] find an element containing acticle's title and write it to a
      const */
      const articleTitle = article.querySelector(titleSelector).innerHTML;
      //console.log('Title of each article: ', articleTitle);

      /* [DONE] generate html code of a link and and append it to a variable */
      articleLink += '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
      //console.log('each articleLink: ', articleLink);
    }

    titleList.innerHTML = articleLink;
    console.log('new titleList innerHTML: ', titleList.innerHTML);

    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  const generateTags = function () {
    console.log('%c function generateTags called ', consoleFunctionStyle);

    /*[DONE] find all articles */
    const articles = document.querySelectorAll(articleSelector);
    console.log('articles: ', articles);

    /*[DONE] for every article: */
    for (let article of articles) {
      console.log('article: ', article);

      /*[DONE] find tags wrapper */
      const tagsWrapper = article.querySelector(tagsSelector);
      console.log('tagsWrapper: ', tagsWrapper);

      /*[DONE] make html variable with empty string */
      let html = '';

      /*[DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('data-tags: ', articleTags);

      /*[DONE] split tags into array */
      const tagsArray = articleTags.split(' ');
      console.log('tagsArray: ', tagsArray);

      /*[DONE] for each tag */
      for (let tag of tagsArray) {

        /*[DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /*[DONE] add generated code to html variable */
        html += linkHTML;
      }
      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      console.log('html var: ', tagsWrapper.innerHTML);
    }
  };

  const generateAuthors = function () {
    console.log('%c function generateAuthors called ', consoleFunctionStyle);

    /* [DONE] find all articles */
    const articles = document.querySelectorAll(articleSelector);

    /* [DONE] for each article */
    for (let article of articles) {

      /* [DONE] find authorWrapper */
      const authorWrapper = article.querySelector(authorSelector);
      console.log('authorWrapper: ', authorWrapper);

      /* [DONE] extract author-tag attribute from authorWrapper */
      let authorTag = authorWrapper.getAttribute('author-tag');
      console.log('author-tag attribute: ', authorTag);

      /* [DONE] generate HTML of the link */
      let authorLink = '';
      authorLink = '<a href="#author-' + authorTag + '">by ' + authorTag + '</a>';

      /* [DONE] assign generated HTML to authorWrapper.innerHTML */
      authorWrapper.innerHTML = authorLink;
      console.log('authorWrapper.innerHTML: ', authorWrapper.innerHTML);
    };
  }

  const tagClickHandler = function (event) {
    console.log('%c function tagClickHandler called ', consoleFunctionStyle
    );
    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href attribute of clickedElement: ', href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log('tag extracted from href attribute: ', tag);

    /* [DONE] find all tag links with class active */
    const activeTags = document.querySelectorAll(tagLinksSelector + '.active');
    console.log('activeTags: ', activeTags);

    /* [DONE] START LOOP: for each active tag link */
    for (let activeTag of activeTags) {

      /* [DONE] remove class active */
      activeTag.classList.remove('active');

      /* [DONE] END LOOP: for each active tag link */
    };

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const matchingTagsLinks = document.querySelectorAll(tagLinksSelector + '[href="' + href + '"]');
    console.log('matchingTagsLinks: ', matchingTagsLinks);

    /* [DONE] START LOOP: for each found tag link */
    for (let matchingTagsLink of matchingTagsLinks) {

      /* [DONE] add class active */
      matchingTagsLink.classList.add('active');
      console.log('add class active to matchingTagLink: ', matchingTagsLink);

      /* [DONE] END LOOP: for each found tag link */
    };

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  };

    /* [IN PROGRESS] */ const authorClickHandler = function (event) {
    console.log('%c function authorClickHandler called ', consoleFunctionStyle);
  };

  const addClickListenersToTags = function () {
    console.log('%c function addClickListenersToTags called ', consoleFunctionStyle);

    /* [DONE] find all links */
    let allTagsLinks = document.querySelectorAll(tagLinksSelector);

    /* [DONE] for each link add tagClickHandler click listener */
    for (let tagLink of allTagsLinks) {
      tagLink.addEventListener('click', tagClickHandler);
    }
  };

  const addClickListenersToAuthors = function () {
    console.log('%c function addClickListenersToAuthors called ', consoleFunctionStyle);

    /* [DONE] find all links */
    let allAuthorsLinks = document.querySelectorAll(authorSelector);

    /* [DONE] for each link add authorClickHandler click listener */
    for (let authorLink of allAuthorsLinks) {
      authorLink.addEventListener('click', authorClickHandler);
      console.log('each author link: ', authorLink);
    }
  };

  generateTitleLinks();
  generateTags();
  generateAuthors();
  addClickListenersToTags();
  addClickListenersToAuthors();

}
