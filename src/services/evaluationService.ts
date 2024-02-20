import axios from "axios";
import { userInfos } from "../utils/authUtils";
import { EvaluationResponse } from "../types/EvaluationTypes";

const API_URL = "http://localhost:8080/api/v1/evaluation";
const token = userInfos().token;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const getEvaluationDetails = async (evaluationId: number) => {
    try {
        const response = await axiosInstance.get<EvaluationResponse>(
            `${API_URL}/details/${evaluationId}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Fetching evaluation details failed:", error);
        throw error;
    }
};