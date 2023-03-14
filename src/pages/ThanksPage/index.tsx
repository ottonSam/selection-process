import { Button } from "@mui/material";
import { Container, Title, Text } from "./styles";

interface IProps {
  goToHome: () => void;
}

const ThanksPage = ({ goToHome }: IProps) => {
  return (
    <Container>
      <Title>Obrigado por se candidatar 🚀</Title>
      <Text>
        Caso queira voltar para a página inicial é possível, apenas utilize o
        link a baixo
      </Text>
      <Button variant="outlined" onClick={goToHome}>
        Voltar para a Home
      </Button>
    </Container>
  );
};

export default ThanksPage;
