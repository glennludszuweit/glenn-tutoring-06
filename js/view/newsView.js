import News from '../model/News.js';
import newsController from '../controller/newsController.js'
import lsController from '../controller/lsController.js'

class NewsView {
  async latestNews() {
    let news = await News.newsData();
    console.log(news);
    let html = news.map((news) => {
      return `
        <div class="news-container" id="${news.id}">
          <div class="news-img">
            <img src="${news.image}" alt="" />
          </div>
          <div class="news-details">
            <h2>${news.headline}</h2>
            <small>${new Date(news.datetime * 1000).toDateString()} - ${
        news.source
      }</small>
            <p>${news.summary}</p>
            <div class="url_and_add">
              <small><a href="${news.url}">read more =></a></small>
              <button class="add-news"> add </button>
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html.join('');

    newsController.addFavoriteNews()
  }

  favoriteNews() {
    let news = lsController.GET('news');
    let html = news.map((news) => {
      return `
        <div class="news-container" id="${news.id}">
          <div class="news-img">
            <img src="${news.image}" alt="" />
          </div>
          <div class="news-details">
            <h2>${news.headline}</h2>
            <small>${news.date_source}</small>
            <p>${news.summary}</p>
            <div class="url_and_add">
              <small><a href="${news.url}">read more =></a></small>
              <button class="remove-news" id=${news.id}>remove</button>
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html.join('');

    newsController.removeFavoriteNews();
  }
}

export default new NewsView();
