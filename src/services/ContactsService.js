import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClint = new HttpClient('http://localhost:3000');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClint.get(`/contacts?orderBy=${orderBy}`);
  }

  getContact(contactId) {
    return this.httpClint.get(`/contacts/${contactId}`);
  }

  createContact(contact) {
    return this.httpClint.post('/contacts', { body: contact });
  }

  updateContact(id, contact) {
    return this.httpClint.put(`/contacts/${id}`, { body: contact });
  }

  deleteContact(id) {
    return this.httpClint.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
