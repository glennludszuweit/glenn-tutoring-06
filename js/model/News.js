class News {
  async newsData() {
    try {
      const url = `https://finnhub.io/api/v1/news?category=general&token=btqofvf48v6oqq03kajg`;
      const response = await fetch(url);
      let data = await response.json();
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new News();
