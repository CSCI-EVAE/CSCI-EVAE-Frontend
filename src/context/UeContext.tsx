import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { UE, UEListResponse } from "../types/UeTypes";
import { getUEList } from "../services/ueService";


interface UEContextProps {
  children: ReactNode;
}

interface UEContextData {
  ueList: UE[];
  ueListError: string;
  getUEList: () => void;
}

export const UEContext = createContext<UEContextData | null>(null);

export function trouverIdEvaluation(
  evaluation: UE,
  evaluationListe: UE[]
): number | null {
  if (evaluation && evaluationListe) {
     
      const evaluationTrouve = evaluationListe.find(
          (item) =>
              item.evaluationId
            
      );

      if (evaluationTrouve && evaluationTrouve.evaluationId !== undefined) {
          return evaluationTrouve.evaluationId;
      } else {
          return null;
      }
  } else {
      return null; 
  }
}

export const UEContextProvider: React.FC<UEContextProps> = ({ children }) => {
  const [ueList, setUeList] = useState<UE[]>([]);
  const [ueListError, setUeListError] = useState("");

  const fetchUEList = useCallback(async () => {
    try {
        const response: UEListResponse | undefined = await getUEList();
        
     
    if (response) {
        console.log("je suis response",response.data);
        console.log("je suis la");
        setUeList(response.data);
        setUeListError("");
      } else {
        setUeListError("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error)
      setUeListError("Une erreur de chargement est survenue");
    }
  }, []);

  useEffect(() => {
    fetchUEList();
  }, [fetchUEList]);

  const contextValue: UEContextData = {
    ueList,
    ueListError,
    getUEList: fetchUEList,
  };

  return (
    <UEContext.Provider value={contextValue}>
      {children}
    </UEContext.Provider>
  );
};
