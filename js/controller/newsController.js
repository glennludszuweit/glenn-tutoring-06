import newsView from '../view/newsView.js';

class NewsController {
  async displayNewsLists() {
    await newsView.newsLists();
  }
}

export default new NewsController();

// z = [];
// x.forEach((y) => {
//   let output = `<div>${y.bla}</div>`;
//   z.push(output);
// });
// container.innerHTML = z.join('');

// let z = x.map((y) => {
//   return `<div>${y.bla}</div>`;
// });
// container.innerHTML = z.join('');
