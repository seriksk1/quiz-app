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

  & button {
    margin: 10px;
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
            <AvatarImage />

            <StyledButtons>
              <input type="file" onChange={handleUploadFile} />
              <StyledSubmitBtn type="submit">Save</StyledSubmitBtn>
            </StyledButtons>
          </StyledContent>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default AvatarForm;
