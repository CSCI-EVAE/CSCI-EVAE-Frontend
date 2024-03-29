//import axios from "axios";
import {
    EvaluationListResponse,
} from "../types/EvaluationType";
import evaluationData from "./evaluations.json";
// import { userInfos } from "../utils/authUtils";
// // const API_URL = "http://localhost:8080/api/v1";
// const token = userInfos().token;

// const axiosInstance = axios.create({
//     //baseURL: 'https://votre-api.com',
//     headers: {
//         "Content-Type": "application/json",

//         Authorization: `Bearer ${token}`,
//     },
// });

// export const getEvaluationList = async () => {
//     try {
//         const response = await axiosInstance.get<EvaluationListResponse>(
//             `${API_URL}/etudiant/evaluations`
//         );
       

//         return response.data;
//     } catch (error) {
//         console.error("evaluation list failed:", error);
//         //throw error;
//     }
// };

export const getEvaluationList = async () => {
    try {
        // Simulez une attente asynchrone pour correspondre au comportement de l'appel API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Retournez les données simulées du fichier JSON
        return evaluationData as EvaluationListResponse;
    } catch (error) {
        console.error("evaluation list failed:", error);
        throw error;
    }
};
