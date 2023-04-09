import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClint = new HttpClient('http://localhost:3000');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClint.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClint.post('/contacts', { body: contact });
  }
}

export default new ContactsService();
