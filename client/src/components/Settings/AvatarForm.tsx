import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { uploadFile } from "../../redux/actions/file";
import { setAvatar } from "../../redux/actions/user";
import { userSelector } from "../../redux/selectors";

import {
  AvatarImage,
  StyledContainer,
  StyledForm,
  StyledSubmitBtn,
  StyledTitle,
} from "./style";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  & button {
    margin: 10px;
  }
`;

const StyledChooseFile = styled.input`
  height: fit-content;
  display: none;
`;

const StyledLabel = styled.label`
  width: fit-content;

  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin: 10px;

  &:hover {
    background-color: #25796e;
  }
`;

interface Props {
  name: string;
  onSubmit: any;
}

const AvatarForm: FC<Props> = ({ name }) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState<File>();
  const { avatar } = useSelector(userSelector);

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      setFile(fileList[0]);
      dispatch(setAvatar(URL.createObjectURL(fileList[0])));
    }
  };

  const upload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("username", localStorage.getItem("username") as string);

      dispatch(uploadFile(formData));
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledForm onSubmit={upload} encType="multipart/form-data">
          <StyledTitle>{name}</StyledTitle>

          <StyledContent>
            <AvatarImage image={avatar} />

            <StyledButtons>
              <StyledLabel htmlFor="file">
                Upload
                <StyledChooseFile
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleSetFile}
                />
              </StyledLabel>
              <StyledSubmitBtn type="submit">Save</StyledSubmitBtn>
            </StyledButtons>
          </StyledContent>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default AvatarForm;
