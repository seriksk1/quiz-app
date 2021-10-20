import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

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

const AvatarForm: FC<Props> = ({ name, onSubmit }) => {
  const [file, setFile] = useState<File>();

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
    uploadFile();
  };

  const uploadFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file, file.name);
    }
  };

  useEffect(() => {
    console.log("file:", file);
  }, [file]);

  return (
    <>
      <StyledContainer>
        <StyledForm onSubmit={onSubmit}>
          <StyledTitle>{name}</StyledTitle>

          <StyledContent>
            <AvatarImage image={file} />

            <StyledButtons>
              <StyledLabel htmlFor="upload-avatar">
                Upload
                <StyledChooseFile
                  id="upload-avatar"
                  type="file"
                  onChange={handleUploadFile}
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
