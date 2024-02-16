import axios from "axios";
import {
    Question,
    QuestionListResponse,
    QuestionBody
} from "../types/questionTypes";
import { userInfos } from "../utils/authUtils";
const API_URL = "http://localhost:8080/api/v1";
const token = userInfos().token;

const axiosInstance = axios.create({
    //baseURL: 'https://votre-api.com',
    headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
    },
});

export const getQuestionsList = async () => {
    try {
        const response = await axiosInstance.get<QuestionListResponse>(
            `${API_URL}/admin/questions`
        );
       

        return response.data;
    } catch (error) {
        console.error("question list failed:", error);
        //throw error;
    }
};

export const addQuestion = async (question: QuestionBody) => {
    try {
        const response = await axiosInstance.post<QuestionBody>(
            `${API_URL}/admin/questions`,
            question
        );
         
        console.log("joooooooooooo"+response.data);
        return response.data;
    } catch (error) {
        console.error("question failed:", error);
        
      //  throw error;
    }
};

export const deleteQuestion = async (id_question: number) => {
    try {
        const response = await axiosInstance.delete<Question>(
            `${API_URL}/admin/questions/${id_question}`
        );

        if (response.status === 400) {
            return true;
        }
        return response.data;
    } catch (error) {
        console.error("questions failed:", error);
        return false;
    }
};

export const updateQuestion = async (
    id_question: number,
    questionBody: QuestionBody
) => {
    try {
        const response = await axiosInstance.put<QuestionBody>(
            `${API_URL}/admin/questions/${id_question}`,
            questionBody
        );
        // log the response to the console
        console.log("questions response:", response);

        if (response.status === 400) {
            return true;
        }
        return response.data;
    } catch (error) {
        console.error("questions failed:", error);
        return false;
    }
};
