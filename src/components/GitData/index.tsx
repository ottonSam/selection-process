import { Alert, Button, Snackbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import GitUser from "../GitUser";
import TextField from "../TextField";

import { Container, InputGroup } from "./styles";

const GitData = () => {
  const [userRepos, setUserRepos] = useState<any>([]);
  const [userData, setUserData] = useState<any>();
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
      const userReposRequest = await fetch(userData.repos_url).then(
        async (reposResponse) => {
          if (reposResponse.status !== 200) {
            return null;
          } else {
            const data = await reposResponse.json();
            const response = data.map((item: any) => {
              const object = {
                label: item.name,
                value: item.html_url,
              };
              return object;
            });
            return response;
          }
        }
      );
      setUserRepos(userReposRequest);
    };

    userData && searchRepos();
  }, [userData]);

  const SearchUser = async () => {
    resetField("name");
    resetField("image");
    resetField("repository");
    const userRequest = await fetch(
      `https://api.github.com/users/${watch("git_user")}`
    ).then(
      async (successResponse) => {
        if (successResponse.status !== 200) {
          setOpen(true);
        } else {
          const userData = await successResponse.json();
          setValue("name", userData.name);
          setValue("image", userData.avatar_url);
          return userData;
        }
      },
      (failResponse) => {
        setOpen(true);
      }
    );
    setUserData(userRequest);
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
      {!!userData && (
        <GitUser
          name={userData.name}
          repos={userRepos}
          avatar_url={userData.avatar_url}
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
