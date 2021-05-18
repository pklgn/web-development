const films = document.getElementsByClassName('films-list__item');
const slidesCount = films.length;
const slideWidthPx = 305;
const visibleFilmsCount = 4;

function getTranslateX(film) {
    let style = window.getComputedStyle(film);
    let matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

function setRightEdge(films) {
    let nextLast;
    nextLast = getNextLastSlideIndex();
    let delta = slideWidthPx*(visibleFilmsCount - nextLast);
    films[nextLast].style.transform = `translateX(${delta}px)`;
}

function collectViewFilmsIndexes() {
    let i;
    let viewFilms = [];
    let nextLast = getNextLastSlideIndex();
    let nextFirst = getNextFirstSlideIndex();
    if (nextFirst < nextLast) {
        for (i = 0; i < (nextLast - nextFirst); i++) {
            viewFilms.push(i);
        }
    } else {
        for (i = nextFirst; i < slidesCount; i++) {
            viewFilms.push(i);
        }
        for (i = 0; i < nextLast; i++) {
            viewFilms.push(i);
        }
    }
    console.log(viewFilms);
    return viewFilms;
}

function setLeftEdge(films) {
    let nextFirst;
    nextFirst = getNextFirstSlideIndex();
    let delta = slideWidthPx*(-nextFirst - 1);
    films[nextFirst].style.transform = `translateX(${delta}px)`;
}

function prevSlide()
{
    let currFilmsIndexes = collectViewFilmsIndexes();
    setLeftEdge(films);
    let currTranslateX;
    for (let i = 0; i < slidesCount; i++) {
        if (currFilmsIndexes.includes(i)) {
            console.log('hi');
            currTranslateX = getTranslateX(films[i]);
            films[i].style.transform = `translateX(${slideWidthPx + currTranslateX}px)`;
        }
    }
}

function nextSlide()
{
    setRightEdge(films);
    let film, currTranslateX;
    for (film of films) {
        currTranslateX = getTranslateX(film);
        film.style.transform = `translateX(${-slideWidthPx + currTranslateX}px)`;
    }
}

function getFilmsTranslates() {
    let film;
    let currFilmOffset = 0;
    let translates = [];
    for (film of films) {
        translates.push(currFilmOffset + getTranslateX(film));
        currFilmOffset += slideWidthPx;
    }
    return translates;
}

function getNextFirstSlideIndex() {
    let curr = (getFirstSlideIndex() - 1) % slidesCount;
    if (curr < 0) {
        curr = slidesCount + curr
    }
    return curr;
}

function getNextLastSlideIndex() {
    return (getLastSlideIndex() + 1) % slidesCount;
}

function getLastSlideIndex() {
    let firstSlide = getFirstSlideIndex();
    return (firstSlide + visibleFilmsCount - 1) % slidesCount;
}

function getFirstSlideIndex() {
    let translatesX = getFilmsTranslates();
    return translatesX.indexOf(0);
}

function run() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
}

window.onload = run;