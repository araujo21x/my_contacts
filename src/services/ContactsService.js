import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClint = new HttpClient('http://localhost:3000');
  }

  async listContacts(orderBy = 'asc') {
    // return this.httpClint.get(`/contacts?orderBy=${orderBy}`);
    // return this.httpClint.get(`/contacts/786735b5-5f50-4bc2-b275-8fbed3cdb
    // b34?orderBy=${orderBy}`);

    return this.httpClint.get(`/contacts/786735b5-5f5-4bc2-b75-8fbed3cdbb34?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClint.post('/contacts', contact);
  }
}

export default new ContactsService();
