import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { PhotoCamera } from "@material-ui/icons";
import { StyledCard } from "./style";
import { useSelector } from "react-redux";
import { quizSelector } from "../../redux/selectors";
import { IQuizState } from "../../redux/interfaces";
import { API_URI } from "../../redux/contants";

const StyledContent = styled(StyledCard)`
  display: flex;
  position: relative;
  height: 250px;

  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: url(${({ image }: any) =>
    image
      ? image
      : "https://res.cloudinary.com/practicaldev/image/fetch/s--FHfKveEJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cy30ufd18lsrm45ji5pw.jpg"});
`;

const StyledChooseFile = styled.input`
  height: fit-content;
  display: none;
`;

const StyledLabel = styled.label`
  width: fit-content;
  height: fit-content;
  margin: 10px;

  position: absolute;
  bottom: 0;
  right: 0;

  cursor: pointer;
  color: #fff;

  filter: drop-shadow(0px 1px 3px black);

  &:hover {
    filter: drop-shadow(0px 1px 3px black) contrast(0.8);
  }
`;

interface Props {}

const PreviewImageUpload: FC<Props> = () => {
  const { currentQuiz }: IQuizState = useSelector(quizSelector);
  const { setValue } = useFormContext();

  const [file, setFile] = useState<string>();

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      setFile(URL.createObjectURL(fileList[0]));
      setValue("image", fileList[0]);
    }
  };

  return (
    <StyledContent
      image={file || (currentQuiz?.image && `${API_URI}/${currentQuiz?.image}`)}
    >
      <StyledLabel htmlFor="file">
        <StyledChooseFile
          id="file"
          type="file"
          name="image"
          onChange={handleSetFile}
        />
        <PhotoCamera />
      </StyledLabel>
    </StyledContent>
  );
};

export default PreviewImageUpload;
