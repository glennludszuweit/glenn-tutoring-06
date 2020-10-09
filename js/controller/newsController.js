import newsView from '../view/newsView.js';
import lsController from './lsController.js';

let newsObj = {};
let newsDATA = []

class NewsController {
  async displayLatestNews() {
    document.querySelector('.latest').addEventListener('click', async () => {
      await newsView.latestNews();
    })
    await newsView.latestNews();
  }

  displayFavoriteNews() {
    document.querySelector('.favorite').addEventListener('click', () => {
      newsView.favoriteNews()
    })
  }

  addFavoriteNews() {
    document.querySelectorAll('.news-container').forEach(news => {
      news.addEventListener('click', (e) => {
        e.preventDefault();

        if (lsController.GET('news') === null) {
          newsDATA = []
        } else {
          newsDATA = lsController.GET('news')
        }

        if (e.target.className !== 'add-news') {
          return;
        } 

        newsObj.image = news.firstElementChild.firstElementChild.src;
        newsObj.headline = news.children[1].children[0].innerText;
        newsObj.date_source = news.children[1].children[1].innerText;
        newsObj.summary = news.children[1].children[2].innerText;
        newsObj.url = news.children[1].children[3].firstElementChild.firstElementChild.href;
        newsObj.id = news;

        newsDATA.push(newsObj)
        lsController.SET('news', newsDATA)
      })
    })
  }

  removeFavoriteNews(){
    document.querySelectorAll('.remove-news').forEach(news => { 
      news.addEventListener('click', () => {
        const index = newsDATA.findIndex(item => item.id == news.id);
        console.log(index);
        newsDATA.splice(index, 1)
        lsController.SET('news', newsDATA)
        newsView.favoriteNews();
      })
    })
  }
}

export default new NewsController();
