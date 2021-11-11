import React from "react";
import axios from "axios";
import styled from "styled-components";

import { API_URI } from "../redux/contants";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  display: flex;
  margin: 0 auto;
`;

const StyledSearchInput = styled.input`
  padding: 8px 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #999;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 8px 10px;
  border-radius: 5px;
  border: none;
  background-color: #309d8f;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

const StyledUsersList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  padding: 20px 0;
  margin: 0;
`;

const StyledUsersListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 250px;

  span {
    font-size: 18px;
  }
`;

const StyledUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

interface IUser {
  username: string;
  avatar: string;
}

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

const Home: React.FC = () => {
  const [searchName, setSearchName] = React.useState("");
  const [foundUsers, setFoundUsers] = React.useState<IUser[]>([]);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const onSearchButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const { data } = await api.get(`/users/${searchName}`);
      const users = data.data;

      setFoundUsers(users);
    } catch (err) {
      console.log(err);
    }
    setSearchName("");
  };

  React.useEffect(() => {
    console.log("foundUsers", foundUsers);
  }, [foundUsers]);

  return (
    <>
      <StyledContainer>
        <SearchBar>
          <StyledSearchInput
            type="text"
            value={searchName}
            placeholder="Search user"
            onChange={handleSearchValueChange}
          />
          <StyledButton onClick={onSearchButtonClick}>Find</StyledButton>
        </SearchBar>

        <StyledUsersList>
          {foundUsers.length > 0
            ? foundUsers.map((user) => {
                return (
                  <StyledUsersListItem>
                    <StyledUserAvatar
                      src={`${API_URI}/${user.avatar}`}
                      alt=""
                    />
                    <span>{user.username}</span>
                  </StyledUsersListItem>
                );
              })
            : null}
        </StyledUsersList>
      </StyledContainer>
    </>
  );
};

export default Home;
