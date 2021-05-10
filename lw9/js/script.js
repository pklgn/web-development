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
    let delta;
    nextLast = getNextLastSlideIndex();
    delta = slideWidthPx*(visibleFilmsCount - nextLast);
    films[nextLast].classList.add('first-film');
    films[nextLast].style.transform = `translateX(${delta}px)`;
    let triggerLayout = films[nextLast].offsetHeight;
    films[nextLast].classList.remove('first-film');
}

function setLeftEdge(films) {
    let nextFirst;
    nextFirst = getNextFirstSlideIndex();
    let delta = slideWidthPx*(-nextFirst - 1);
    films[nextFirst].classList.add('last-film');
    films[nextFirst].style.transform = `translateX(${delta}px)`;
    let triggerLayout = films[nextFirst].offsetHeight;
    films[nextFirst].classList.remove('last-film');
}

function prevSlide()
{
    setLeftEdge(films);
    let film, currTranslateX;
    for (film of films) {
        currTranslateX = getTranslateX(film);
        film.style.transform = `translateX(${slideWidthPx + currTranslateX}px)`;
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