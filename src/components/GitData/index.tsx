import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";

import { Alert, Button, Snackbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import GitUser from "../GitUser";
import TextField from "../TextField";

import { Container, InputGroup } from "./styles";

const GitData = () => {
  const [userRepos, setUserRepos] = useState<any>([]);
  const [reposUrl, setReposUrl] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { watch, setValue, resetField } = useFormContext();

  useEffect(() => {
    const searchRepos = async () => {
      const userReposRequest = await axios({
        method: "get",
        url: reposUrl,
      })
        .then(async (response) => {
          if (response.status !== 200) {
            return null;
          }
          const data = await response.data;
          const reposData = data.map((item: any) => {
            return {
              label: item.name,
              value: item.html_url,
            };
          });
          return reposData;
        })
        .catch((error) => {
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
          }
        });
      setUserRepos(userReposRequest);
    };

    reposUrl && searchRepos();
  }, [reposUrl]);
  console.log(reposUrl);

  const SearchUser = async () => {
    resetField("name");
    resetField("image");
    resetField("repository");

    await axios({
      method: "get",
      url: `https://api.github.com/users/${watch("git_user")}`,
    })
      .then(async (response) => {
        if (response.status !== 200) {
          setOpen(true);
          return;
        }
        const userData = response.data;
        setValue("name", userData.name);
        setValue("image", userData.avatar_url);
        setReposUrl(userData.repos_url);
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
        }
      });
  };

  return (
    <Container>
      <InputGroup>
        <TextField label="User git" name="git_user" />
        <Button
          sx={{ width: "50px", marginTop: "1rem" }}
          color="primary"
          onClick={SearchUser}
        >
          <SearchIcon />
        </Button>
      </InputGroup>
      {!!reposUrl && (
        <GitUser
          name={watch("name")}
          repos={userRepos}
          avatar_url={watch("image")}
        />
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Ouve um erro na chamada para a API do Github, por favor confira se o
          username esta correto
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default GitData;
