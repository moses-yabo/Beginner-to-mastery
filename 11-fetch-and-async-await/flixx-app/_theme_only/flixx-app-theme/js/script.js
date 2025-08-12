const global = {
  currentPage: location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  apiKey: {
    favMovieUrl: 'movie/popular',
    favTvShowUrl: 'tv/popular',

    authKey:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTAwYmRjYzIxYTBlNzJmNzY2ZTAwYmI1ODAwNzNlNSIsIm5iZiI6MTc1NDI5MjQzMi4zLCJzdWIiOiI2ODkwNjBkMDAzNWYxNTEzNTVhNDY5MmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fwmA0IV1BQyHwQkKPzQKAwz6jT2VAqHU2KFq5_YO-sQ',
  },
};

function renderList(data, id) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute('data-id', data.id);

  const imageUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : '../images/no-image.jpg';

  const currentLoc =
    global.currentPage === '/' || global.currentPage === '/index.html'
      ? `movie-details.html`
      : '/tv-details.html';

  div.innerHTML = `
      <a href="${currentLoc}?id=${data.id}">
            <img
                  src=${imageUrl}
                  class="card-img-top"
                  alt="Movie Title"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">${data.title || data.original_name}</h5>
                <p class="card-text">
                  <small class="text-muted">Release: ${
                    data.release_date || data.first_air_date
                  }</small>
                </p>
              </div>
      `;

  document.querySelector(id).appendChild(div);
}
async function search() {
  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');
  if (global.search.term !== '' && global.search.term !== null) {
    //@todo - make request and diplay the results
    const { results, total_pages, page, total_results } = await searchAPIData();

    displaySearchResults(results, total_results);

    document.querySelector('#search-term').value = '';
    global.search.totalResults = total_results;
    global.search.totalPages = total_pages;
    global.search.page = page;
    if (results.length === 0) {
      showAlertMessage('Could not get any results !', 'alert-success');
    }
  } else {
    showAlertMessage('Please enter a search term !', 'alert-error');
  }
  displayPagination();
}

function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
   <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  `;
  const container = document.querySelector('#pagination');
  container.innerHTML = '';

  container.appendChild(div);

  //Disable prev button if on first page
  if (global.search.page === 1) {
    const prevBtn = document.querySelector('#prev');
    prevBtn.setAttribute('disabled', 'true');
  } else if (global.search.page === global.search.totalPages) {
    const nextBtn = document.querySelector('#next');
    nextBtn.setAttribute('disabled', 'true');
    results.length = global.search.totalResults;
    document.querySelector('#search-results-heading').innerHTML = '';
  }

  //Next page

  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results, total_pages, total_results } = await searchAPIData();
    console.log(global.search.page);

    displaySearchResults(results, total_results);
    displayPagination();
  });
  document.querySelector('#prev').addEventListener('click', async () => {
    global.search.page--;
    const { results, total_pages, total_results } = await searchAPIData();
    console.log(global.search.page);

    displaySearchResults(results, total_results);
    displayPagination();
  });
}
function displaySearchResults(results, total) {
  const resultsContainer = document.querySelector('#search-results');
  resultsContainer.innerHTML = ''; // 🧹 Clear old results
  document.querySelector('#search-results-heading').innerHTML = '';

  document.querySelector('#search-results-heading').innerHTML = `
    <h2>${results.length} of ${total} results for ${global.search.term}</h2>
  `;

  let currentLoc = '';
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      currentLoc = `movie-details.html`;
      break;
    case '/shows.html':
      currentLoc = '/tv-details.html';
      break;
    case '/search.html':
      currentLoc =
        global.search.type === 'movie'
          ? 'movie-details.html'
          : 'tv-details.html';
      break;
    default:
      break;
  }

  results.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('data-id', data.id);

    const imageUrl = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : '../images/no-image.jpg';

    div.innerHTML = `
      <a href=${currentLoc}?id=${data.id}>
        <img src=${imageUrl} class="card-img-top" alt="" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${data.title || data.name}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${
            data.release_date || data.first_air_date
          }</small>
        </p>
      </div>
    `;

    resultsContainer.appendChild(div);
  });
}
function renderDetails(data, id) {
  const div = document.createElement('div');
  div.classList.add('details-top');
  const budget = data.budget
    ? `  <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
        data.budget
      )}</li>`
    : `  <li><span class="text-secondary">Number of Episodes:</span> ${data.number_of_episodes}</li>`;
  const revenue = data.revenue
    ? `  <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(
        data.revenue
      )}</li>`
    : `  <li><span class="text-secondary">Number of Seasons:</span> ${data.number_of_seasons}</li>`;
  const runtime = data.runtime
    ? `<li><span class="text-secondary">Runtime:</span> ${data.runtime} minutes</li>`
    : `<li><span class="text-secondary">Season Ends:</span> ${data.last_air_date}</li>`;

  const imageUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : '../images/no-image.jpg';
  div.innerHTML = `
  <div>
            <img
              src=${imageUrl}
              class="card-img-top"
              alt=${data.title || data.name}
            />
          </div>
          <div>
            <h2>${data.title || data.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
             ${data.vote_average}
            </p>
            <p class="text-muted">Release Date: ${
              data.release_date || data.first_air_date
            }</p>
            <p>
              ${data.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${data.genres
                .map((genre) => {
                  return `<li>${genre.name}</li>`;
                })
                .join('')}
             
            </ul>
            <a href="${
              data.homepage
            }" target="_blank" class="btn">Visit Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>${data.tagline}</h2>
          <ul>
          ${budget}
           ${revenue}
           ${runtime}
            <li><span class="text-secondary">Status:</span> ${data.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${data.production_companies
            .map((company) => `<span> ${company.name}</span>`)
            .join(`, `)}</div>
  
  
  `;

  document.querySelector(id).appendChild(div);
}
function renderSlides(results) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  results.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    const imageUrl = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : '../images/no-image.jpg';
    let anchorEl = '';

    if (global.currentPage === '/' || global.currentPage === '/index.html') {
      anchorEl = `
   <a href="movie-details.html?id=${data.id}">
        <img src="${imageUrl}" alt="${data.title}" />
      </a>
  `;
    } else if (global.currentPage === '/shows.html') {
      anchorEl = `
   <a href="tv-details.html?id=${data.id}">
        <img src="${imageUrl}" alt="${data.name}" />
      </a>
  `;
    }
    div.innerHTML = `
      ${anchorEl}
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${data.vote_average}
      </h4>
    `;

    swiperWrapper.appendChild(div);
    initSwiper();
  });
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disabledOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  return swiper;
}

//POPULAR TV MOVIES
async function displayPopularMovies() {
  const { results } = await getData(global.apiKey.favMovieUrl);

  results.forEach((favMovie) => {
    renderList(favMovie, '#popular-movies');
  });
}
//POPULAR TV SHOWS
async function displayPopularTvSHows() {
  const { results } = await getData(global.apiKey.favTvShowUrl);

  results.forEach((favShows) => {
    renderList(favShows, '#popular-shows');
  });
}
//POPULAR MOVIE DETAILS
async function displayMovieDetails() {
  let id = window.location.search.split('=')[1];
  const movie = await getData(
    `${global.apiKey.favMovieUrl.split('/')[0]}/${id}`
  );
  //Overlay for background
  displayBackgroundImage('movie', movie.backdrop_path);
  renderDetails(movie, '#movie-details');
}
//POPULAR TV DETAILS
async function displayTvDetails() {
  let id = window.location.search.split('=')[1];
  const tv = await getData(`${global.apiKey.favTvShowUrl.split('/')[0]}/${id}`);
  //Overlay for background
  displayBackgroundImage('show', tv.backdrop_path);
  renderDetails(tv, '#show-details');
}

//Search Movies/Shows
//DisplaySliderMovies

async function displaySlider() {
  const { results } = await getData(
    `${global.apiKey.favMovieUrl.split('/')[0]}/now_playing`
  );
  const tvResults = await getData(
    `${global.apiKey.favTvShowUrl.split('/')[0]}/airing_today`
  );

  if (global.currentPage === '/' || global.currentPage === '/index.html') {
    renderSlides(results);
  } else if (global.currentPage === '/shows.html') {
    renderSlides(tvResults.results);
  }
}
//Display Backdrop on detail pages
function displayBackgroundImage(type, backgroundPath) {
  const overlay = document.createElement('div');
  overlay.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlay.style.backgroundPosition = 'center';
  overlay.style.backgroundRepeat = 'no-repeat';
  overlay.style.height = '100vh';
  overlay.style.width = '100vw';
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.zIndex = '-1';
  overlay.style.opacity = '0.3';
  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlay);
  } else {
    document.querySelector('#show-details').appendChild(overlay);
  }
}
async function searchAPIData() {
  document.querySelector('.spinner').classList.toggle('show');
  const API_URL = `https://api.themoviedb.org/3/search/${global.search.type}?api_key=${global.apiKey.authKey}&language=en-US&query=${global.search.term}&page=${global.search.page}`;
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: global.apiKey.authKey,
      },
    });

    const data = await response.json();
    console.log(data.results);

    console.log('page on request', global.search.page);

    document.querySelector('.spinner').classList.toggle('show');
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
//Fetch data from TMDB API
async function getData(endpoint) {
  document.querySelector('.spinner').classList.toggle('show');
  const API_URL = 'https://api.themoviedb.org/3/';
  try {
    const response = await fetch(
      `${API_URL}${endpoint}?api_key=${global.apiKey.authKey}&language=en-US`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: global.apiKey.authKey,
        },
      }
    );

    const data = await response.json();

    document.querySelector('.spinner').classList.toggle('show');
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
//Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displayPopularMovies();
      displaySlider();
      break;
    case '/shows.html':
      displayPopularTvSHows();
      displaySlider();
      break;
    case '/movie-details.html':
      displayMovieDetails();
      break;
    case '/tv-details.html':
      displayTvDetails();
      break;
    case '/search.html':
      search();
      break;

    default:
      break;
  }
  highlightActiveLink();
}
function showAlertMessage(message, className) {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);
  setTimeout(() => {
    alertEl.remove();
  }, 3000);
}
function addCommasToNumber(number) {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
document.addEventListener('DOMContentLoaded', init);
