import newsView from '../view/newsView.js';

class NewsController {
  async displayLatestNews() {
    await newsView.latestNews();
  }
}

export default new NewsController();
