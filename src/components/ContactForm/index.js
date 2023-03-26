import propTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';
import { Form, ButtonContainer } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handlerNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handlerEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail está com erro' });
    } else {
      removeError('email');
    }
  }

  function handlerPhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Form noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handlerNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handlerEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlerPhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Discord">Discord</option>
          <option value="Facebook">Facebook</option>
          <option value="Linkedin">Linkedin</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
