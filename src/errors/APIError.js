export default class APIError extends Error {
  constructor(message) {
    super();

    this.name = 'APIError';
    this.message = message;
  }
}
