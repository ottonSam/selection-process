import { Button } from "@mui/material";
import { useState } from "react";

import GitUser from "../GitUser";
import TextField from "../TextField";

import { Container, InputGroup } from "./styles";

const GitData = () => {
  const [userRepos, setUserRepos] = useState<any>([]);
  const [userData, setUserData] = useState<any>();
  const SearchUser = async (user: string) => {
    const userRequest = await fetch(
      `https://api.github.com/users/${user}`
    ).then(
      async (successResponse) => {
        if (successResponse.status !== 200) {
          return null;
        } else {
          const userData = await successResponse.json();
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
          return userData;
        }
      },
      (failResponse) => {
        return null;
      }
    );
    setUserData(userRequest);
  };

  return (
    <Container>
      <InputGroup>
        <TextField label="User git" name="username" />
        <Button sx={{ width: "300px" }} onClick={(e) => SearchUser("ottonsam")}>
          Pesquisar usuário
        </Button>
      </InputGroup>
      {!!userData && (
        <GitUser
          name={userData.name}
          repos={userRepos}
          avatar_url={userData.avatar_url}
        />
      )}
    </Container>
  );
};

export default GitData;
