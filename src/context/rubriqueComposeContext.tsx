import React, {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import { RubriqueCompose, transformRubriquesComposeDTOToMyRubriquesCompose } from "../types/rubriquesComposeTypes ";
import {
    addRubriqueCompose,
    deleteRubriqueCompose,
    getRubriqueComposeList,
    updateRubriqueCompose,
} from "../services/rubriqueComposeService";

// Définition du type des props pour rubriqueComposeContextProvider
interface rubriqueComposeContextProviderProps {
    children: ReactNode; // children doit être de type ReactNode
}

// Création du contexte
export const RubriqueComposeContext = createContext<any>(null); // Vous pouvez remplacer 'any' par le type spécifique que vous souhaitez utiliser

export function trouverRubriqueCompose(
    rubriqueCompose: RubriqueCompose,
    rubriqueComposeListe: RubriqueCompose[]
): RubriqueCompose | null {
    // if (rubriqueCompose && rubriqueComposeListe) {
    //     // Recherche du rubriqueCompose dans la liste
    //     const rubriqueComposeTrouve = rubriqueComposeListe.find(
    //         (item) =>
    //             item.ordre === rubriqueCompose.ordre &&
    //             item.designation === rubriqueCompose.designation
    //     );

    //     // Si le rubriqueCompose est trouvé, retourne son ID
    //     if (rubriqueComposeTrouve ) {
    //         return rubriqueComposeTrouve;
    //     } else {
    //         return null; // Retourne null si le rubriqueCompose n'est pas trouvé ou s'il n'a pas d'ID
    //     }
    // } else {
   return null; // Retourne null si les données d'entrée sont invalides ou manquantes
    // }
}





// export function trierParOrdre(liste: RubriqueCompose[]): RubriqueCompose[] {
//     // Utilise Array.sort() pour trier la liste en fonction de la propriété 'ordre'
//     return liste.sort((a, b) => a.ordre - b.ordre);
// }

// Composant rubriqueComposeContextProvider
export const RubriqueComposeContextProvider: React.FC<
    rubriqueComposeContextProviderProps
> = ({ children }) => {
    const [rubriqueCompose, setRubriqueCompose] = useState({});
    
    const [rubriqueComposeList, setRubriqueComposeList] = useState<RubriqueCompose[]>();
    const [rubriqueComposeListError, setRubriqueComposeListError] = useState("");
    const [addRubriqueComposeError, setAddRubriqueComposeError] = useState("");
    const [deleteRubriqueComposeError, setDeleteRubriqueComposeError] = useState("");
    const [modifyRubriqueComposeError, setModifyRubriqueComposeError] = useState("");

    const updateRubriqueComposeList = useCallback((value: RubriqueCompose[]) => {
        setRubriqueComposeList(value);
    }, []);

    const updateCurrentRubriqueCompose= useCallback((value: {}) => {
        setRubriqueCompose(value);
    }, []);

    
    const getList = useCallback(async () => {
        let list = await getRubriqueComposeList();
        if (list) {
            console.log("list", list.data[0].questionsOrdre[0].idQuestion);
           const newList= transformRubriquesComposeDTOToMyRubriquesCompose(list.data);
            setRubriqueComposeListError("");
            updateRubriqueComposeList(newList);
        } else {
            setRubriqueComposeListError("Une erreur de chargement est survenue");
        }
    }, [updateRubriqueComposeList]);

    useEffect(() => {
        getList();
    }, [getList]);

    const addNewRubriqueCompose = useCallback(
        async (rubriqueCompose: RubriqueCompose) => {
            const response = await addRubriqueCompose(rubriqueCompose);
            if (response) {
                setRubriqueCompose({});
                setAddRubriqueComposeError("");
                getList();
                return;
            } else {
                setAddRubriqueComposeError("Erreur à lAjout");
            }
        },
        [getList]
    );

    const modifyRubriqueCompose = useCallback(
        async (id_rubriqueCompose: number, rubriqueCompose: RubriqueCompose) => {
            const response = await updateRubriqueCompose(
                id_rubriqueCompose,
                rubriqueCompose
            );
            if (response) {
                setRubriqueCompose({});
                
                setModifyRubriqueComposeError("");
                getList();
                return;
            } else {
                setModifyRubriqueComposeError("Erreur à la modification");
            }
        },
        [getList]
    );

    const removeRubriqueCompose = useCallback(async (rubriqueCompose_id: number) => {
        const response = await deleteRubriqueCompose(rubriqueCompose_id);
        if (response) {
            setDeleteRubriqueComposeError("");
            getList();
            return;
        } else {
            setDeleteRubriqueComposeError("Erreur lors de  la suppression");
        }
    }, [getList]);

  

    return (
        <RubriqueComposeContext.Provider
            value={{
                updateRubriqueComposeList,
                rubriqueComposeList,
                addNewRubriqueCompose,
                rubriqueCompose,
                updateCurrentRubriqueCompose,
                rubriqueComposeListError,
                addRubriqueComposeError,
                removeRubriqueCompose,
                deleteRubriqueComposeError,
                modifyRubriqueComposeError,
                modifyRubriqueCompose,
                getList,
               
            }}
        >
            {children}
        </RubriqueComposeContext.Provider>
    );
};
