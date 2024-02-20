import React, {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    Evaluation,
} from "../types/EvaluationType";

import {
    getEvaluationList
}  from "../services/EvaluationEtudiantService";

interface evaluationContextProviderProps {
    children:ReactNode;
}


//creation de context
export const EvaluationContext = createContext<any>(null);

// export function trouverIdEvaluation(
//     evaluation: Evaluation,
//     evaluationList: Evaluation[]
// ): number | null {
//     if(evaluation && evaluationList){
       
//         const evaluationTrouve = evaluationList.find(
//             (item) => 
//             item.noEvaluation === evaluation.noEvaluation
//         );
        
//         if(evaluationTrouve && evaluationTrouve.id !== undefined){
//                return evaluationTrouve.id;
//         }
//         else{
//             return null;
//         }

//     }else{
//         return null;
//     }
    
// } 

export function AjusterColonnes(evaluationList: Evaluation[]): any[] {
    // Vérifier si questionList et questionList.questionList sont définis
    if (evaluationList) {
        // Mappez chaque élément en retirant la colonne id
        return evaluationList.map((question: Evaluation) => {
            const { id, etat,nomEnseignant,noEvaluation,periode,designation,codeFormation,anneeUniversitaire, ...rest } = question;
            
            
            return {...rest, anneeUniversitaire : anneeUniversitaire, codeFormation : codeFormation,
                noEvaluation: noEvaluation, etat:etat,designation:designation,nomEnseignant:nomEnseignant,periode:periode
            };
        });
    } else {
        return []; // Retourne un tableau vide si les données d'entrée sont invalides ou manquantes
    }
}


export const EvaluationContextProvider : React.FC <
evaluationContextProviderProps
> = ({ children }) => {
    const [evaluationListe , setEvaluationListe] = useState<Evaluation[]>();
    const [evaluationListeError , setEvaluationListeError ] = useState("");

    const updateEvaluationList = useCallback((value: Evaluation[]) => {
        setEvaluationListe(value);
    },[] );

    const getList = useCallback(async () => {
        let list = await getEvaluationList();
        if (list) {
            setEvaluationListeError("");
            updateEvaluationList(list.data);
        } else {
            setEvaluationListeError("Une erreur de chargement est survenue");
        }
    }, [updateEvaluationList]);
    useEffect(() => {
        getList();
    }, [getList]);

    return (
        <EvaluationContext.Provider
            value={{
                updateEvaluationList,
                evaluationListe,
                evaluationListeError
            }}
        >
            {children}
        </EvaluationContext.Provider>
    );


}










