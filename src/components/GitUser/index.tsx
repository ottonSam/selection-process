import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

// import { Container } from './styles';

interface repo {
  label: string;
  value: string;
}

interface IProps {
  name: string;
  repos: repo[];
  avatar_url: string;
}

const GitUser = ({ name, repos, avatar_url }: IProps) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Avatar alt="Git photo" src={avatar_url} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={repos}
          renderInput={(params) => (
            <TextField {...params} label="Repositórios" />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default GitUser;
