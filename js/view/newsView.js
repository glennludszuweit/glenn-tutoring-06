import News from '../model/News.js';

class NewsView {
  async newsLists() {
    let news = await News.newsData();
    let html = news.map((news) => {
      return `
        <div class="news-container">
          <div class="news-img">
            <img src="${news.image}" alt="" />
          </div>
          <div class="news-details">
            <h2>${news.headline}</h2>
            <small>${news.datetime} - ${news.source}</small>
            <p>${news.summary}</p>
            <small><a href="${news.url}">read more =></a></small>
          </div>
        </div>
      `;
    });
    container.innerHTML = html.join('');
  }
}

export default new NewsView();
