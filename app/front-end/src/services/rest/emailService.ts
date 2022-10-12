import axios from "axios";
import { IFormulario } from "../../interfaces/IFormulario";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

export const getEmails = async () => {
  const response = await api.get("/sendForm");
  return response.data;
};

export const sendEmail = async (email: IFormulario) => {
  const response = await api.post("/sendForm", email);
  return response.data;
};

