import { useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function NewContact() {
  const contactFormRef = useRef(null);
  async function handlerSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({ type: 'success', text: 'Contato cadastrar o contato!', duration: 3000 });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar o contato!', duration: 3000 });
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handlerSubmit}
      />
    </>
  );
}
