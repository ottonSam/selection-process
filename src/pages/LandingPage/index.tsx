import { ListItem } from "@mui/material";
import {
  Circle,
  Container,
  ImageBox,
  TextBox,
  Image,
  Title2,
  Title3,
  Span,
  Body1,
  GoFormButton,
  List,
} from "./styles";

interface IProps {
  goToForm: () => void;
}

const LandingPage = ({ goToForm }: IProps) => {
  return (
    <>
      <Circle />
      <Container>
        <TextBox>
          <Title2>
            Transformando ideias em soluções <Span>TechVanguard</Span>
          </Title2>
          <Body1>
            Bem-vindo à nossa empresa, uma organização em rápido crescimento que
            está procurando contratar os melhores desenvolvedores para se juntar
            à nossa equipe dinâmica. Nós somos apaixonados por tecnologia e
            inovação, e estamos comprometidos em criar soluções que atendam às
            necessidades dos nossos clientes.
          </Body1>
          <Body1>
            Nossa equipe de desenvolvimento é composta por profissionais
            altamente qualificados e experientes em diversas áreas, incluindo
            desenvolvimento web, mobile, inteligência artificial e outras
            tecnologias emergentes. Estamos procurando contratar desenvolvedores
            talentosos que compartilham nossa paixão pela tecnologia e que
            desejam fazer parte de uma equipe de sucesso.
          </Body1>
          <GoFormButton onClick={goToForm}>Junte-se a nós!</GoFormButton>

          <Title3>
            <Span>Requisitos da vaga:</Span>
          </Title3>
          <List>
            <ListItem>
              Formação em Ciência da Computação, Engenharia de Software,
              Sistemas de Informação ou área relacionada
            </ListItem>
            <ListItem>
              Experiência comprovada em desenvolvimento de software, com ênfase
              em design, codificação, depuração e testes
            </ListItem>
            <ListItem>
              Habilidade em resolver problemas complexos e em trabalhar em
              equipe
            </ListItem>
            <ListItem>
              Boa comunicação, incluindo habilidades de escrita e apresentação
            </ListItem>
            <ListItem>
              Ser proativo e estar sempre atualizado com as tendências e
              inovações em tecnologia
            </ListItem>
          </List>
        </TextBox>

        <ImageBox>
          <Image src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" />
        </ImageBox>
      </Container>
    </>
  );
};
export { LandingPage };
