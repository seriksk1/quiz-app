import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin: 20px auto;
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
  align-items: center;
  width: 95%;
  list-style: none;
  padding: 20px 0;
  margin: 0;
`;

const StyledUsersListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 680px;
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px 2px #cfcfcfba;

  span {
    font-size: 18px;
  }

  .wrap {
    display: flex;
    align-items: center;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #aaa;
    }
  }
`;

const StyledUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ErrorMessage = styled.h2`
  margin: 0;
  padding: 0;
  color: crimson;
  text-align: center;
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
  const [searchError, setSearchError] = React.useState<boolean>(false);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const onSearchButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const { data } = await api.get(`/users/${searchName}`);
      const users = data.data;

      if (users.length <= 0) {
        setSearchError(true);
      } else {
        setFoundUsers(users);
      }
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
            onFocus={() => setSearchError(false)}
          />
          <StyledButton onClick={onSearchButtonClick}>Find</StyledButton>
        </SearchBar>

        <StyledUsersList>
          {foundUsers.length > 0 &&
            foundUsers.map(({ username, avatar }) => {
              return (
                <StyledUsersListItem key={username}>
                  <div className="wrap">
                    <StyledUserAvatar
                      src={
                        avatar
                          ? `${API_URI}/${avatar}`
                          : "https://html5css.ru/howto/img_avatar.png"
                      }
                      alt=""
                    />
                    <span>{username}</span>
                  </div>
                  <Link to={`/profile/${username}`}>Go to profile</Link>
                </StyledUsersListItem>
              );
            })}
          {searchError && <ErrorMessage>Users not found</ErrorMessage>}
        </StyledUsersList>
      </StyledContainer>
    </>
  );
};

export default Home;
