import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Evaluation, EvaluationResponse } from "../types/EvaluationTypes";
import { getEvaluationDetails } from "../services/evaluationService";

interface EvaluationContextProps {
  children: ReactNode;
}

interface EvaluationContextData {
  evaluationDetails: Evaluation| null;
  evaluationError: string;
  fetchEvaluationDetails: (evaluationId: number) => void;
}

export const EvaluationContext = createContext<EvaluationContextData | null>(null);

export const EvaluationContextProvider: React.FC<EvaluationContextProps> = 
({ children }) => {
  const [evaluationDetails, setEvaluationDetails] = useState<Evaluation | null>(null);
  const [evaluationError, setEvaluationError] = useState("");



  

  const fetchEvaluationDetails = useCallback(async (evaluationId: number) => {
    try {
      const data = await getEvaluationDetails(evaluationId);

      if (data) {
        setEvaluationDetails(data.data);
        setEvaluationError("");
      } else {
        setEvaluationError("Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
      setEvaluationError("Une erreur de chargement est survenue");
    }
  }, []);

 

  const contextValue: EvaluationContextData = {
    evaluationDetails,
    evaluationError,
    fetchEvaluationDetails,
  };

  return (
    <EvaluationContext.Provider value={contextValue}>
      {children}
    </EvaluationContext.Provider>
  );
};
