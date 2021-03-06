import axios from "axios";
import { ACTION_QUIZ, API_URI, TOAST_OPTION } from "../contants";
import { showNotification } from "./notification";

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const setNewQuiz = (data: any) => ({
  type: ACTION_QUIZ.CREATE_QUIZ,
  payload: data,
});

export const setSelectedCard = (data: any) => ({
  type: ACTION_QUIZ.SET_SELECTED_CARD,
  payload: data,
});

export const createQuiz = async (formData: FormData) => {
  try {
    await api.post("/quiz", formData);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const updateQuiz = async (formData: FormData) => {
  try {
    const updatedQuiz = await api.put("/quiz", formData);
    console.log(updatedQuiz);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
