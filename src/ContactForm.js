import React from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class ContactForm extends React.Component {
  render() {
    return (
      <Container>
        <Title color="#63c226">Skontaktuj się z nami</Title>
        <InnerContainer>
          <Field>
            <Label>Twoje Imię</Label>
            <Input id="imie" type="text" placeholder="Imię" />
          </Field>
          <Field>
            <Label>Twoje E-mail</Label>
            <Input id="e-mail" type="text" placeholder="E-mail" />
          </Field>
          <Field>
            <Label>Twoja Wiadomość</Label>
            <TextArea
              id="wiadomosc"
              rows="10"
              cols="50"
              type="text"
              placeholder="Wiadomość"
            />
          </Field>
          <Button>Wyślji</Button>
        </InnerContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: #101010;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 30px;
  flex: 1;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: 50px 100px;
  flex-direction: column;
  flex: 1;
`;

const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  font-size: 16px;
  font-family: 'Sourc Sans Pro', sans-serif;
  font-weight: lighter;
  color: #63c226;
  margin-bottom: 7px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 3px;
  border: 1px solid #999;
  background-color: #ededed;

  &:focus {
    outline: #63c226 auto 5px;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 3px;
  font-size: 18px;
  background-color: #ededed;

  &:focus {
    outline: #63c226 auto 5px;
  }
`;

const Button = styled.button`
  font-size: 20px;
  padding: 12px;
  background-color: #63c226;
  font-family: 'Source sans pro', sans-serif;
  font-weight: bold;
  cursor: pointer;
  width: 230px;
  margin-top: 40px;
  border-radius: 3px;
  color: #000;
  transition: color 0.5s, background-color 0.5s;
  outline: none;
  border: none;

  &:hover {
    color: #fff;
  }
`;
