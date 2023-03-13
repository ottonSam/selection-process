import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import GitUser from "../GitUser";
import TextField from "../TextField";

import { Container, InputGroup } from "./styles";

const GitData = () => {
  const [userRepos, setUserRepos] = useState<any>([]);
  const [userData, setUserData] = useState<any>();

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
          return null;
        } else {
          const userData = await successResponse.json();
          setValue("name", userData.name);
          setValue("image", userData.avatar_url);
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
        <TextField label="User git" name="git_user" />
        <Button
          sx={{ width: "50px", marginTop: "1rem" }}
          color="secondary"
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
    </Container>
  );
};

export default GitData;
