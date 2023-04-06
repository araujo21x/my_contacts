import HttpClient from './utils/HttpClient';

class CategoryService {
  constructor() {
    this.httpClint = new HttpClient('http://localhost:3000');
  }

  async listCategories() {
    return this.httpClint.get('/categories');
  }
}

export default new CategoryService();
