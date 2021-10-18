import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Quiz name is required"),
    questions: yup.array().of(
      yup.object().shape({
        text: yup.string().required("Question name is required"),
        answers: yup.array().of(
          yup.object().shape({
            text: yup.string().required("Answer text is required"),
            isRight: yup.boolean(),
          })
        ),
      })
    ),
  })
  .required();
