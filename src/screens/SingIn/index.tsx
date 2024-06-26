import { Text, View } from 'react-native';
import { Container, Slogan, Title } from './styles';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

export function SingIn() {
  return (
    <Container source={backgroundImg} >
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de veículos</Slogan>

      <Button title="Entrar com Google" />
    </Container>
  );
}