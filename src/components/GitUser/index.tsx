import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

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
  const { control, watch } = useFormContext();

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Avatar alt="Git photo" src={avatar_url} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Controller
          name="repository"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Autocomplete
                {...field}
                disabled={!repos.length}
                options={repos}
                value={watch("repository") || null}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"Projeto de apresentação"}
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
                onChange={(_, data) => {
                  field.onChange(data);
                }}
              />
            );
          }}
        />
      </CardContent>
    </Card>
  );
};

export default GitUser;
