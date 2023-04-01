import APIError from '../../errors/APIError';
import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    // await delay(2000);
    const response = await fetch(`${this.baseURL}${path}`);
    const contentType = response.headers.get('Content-Type');

    if (!contentType.includes('application/json')) {
      throw new APIError('Erro na conexão com o servidor');
    }

    const body = await response.json();
    if (response.ok) return body;
    throw new APIError(body.error);
  }

  async post(path, body) {
    await delay(2000);
    const response = await fetch(`${this.baseURL}${path}`);
    console.log(body);

    return response.json();
  }
}

export default HttpClient;
