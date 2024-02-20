import React, {
    createContext,
    ReactNode,
    useCallback,
    useState,
} from "react";
import { RubriqueCompose } from "../types/rubriquesComposeTypes ";




// Définition du type des props pour rubriqueContextProvider
interface rubriqueContextProviderProps {
    children: ReactNode; // children doit être de type ReactNode
}

// Création du contexte
export const RubriqueEnseignantContext = createContext<any>(null); // Vous pouvez remplacer 'any' par le type spécifique que vous souhaitez utiliser

export function findRubriqueByDesignation(rubriques: RubriqueCompose[], designation: string): RubriqueCompose | undefined {
    // Parcourir la liste de rubriques
    for (const rubrique of rubriques) {
        // Vérifier si la désignation correspond à celle fournie en entrée
        if (rubrique.designation === designation) {
            // Retourner l'objet de la liste de rubriques correspondant
            return rubrique;
        }
    }

    // Si aucune rubrique ne correspond à la désignation, retourner undefined
    return undefined;
}




// Composant rubriqueContextProvider
export const RubriqueEnseignantContextProvider: React.FC<
    rubriqueContextProviderProps
> = ({ children }) => {
    
    const [rubriqueAdded,setRubriqueAdded] = useState<RubriqueCompose []>([]);
    const [rubriqueSelectedEns,setRubriqueSelectedEns] = useState<RubriqueCompose >();
    

  
    const updateRubriqueSelectedEns = useCallback((value: RubriqueCompose) => {
        setRubriqueSelectedEns(value);
    }, []);
    const updateRubriqueAdded = useCallback((value: RubriqueCompose) => {
        setRubriqueAdded([...rubriqueAdded, value]);
    }, [rubriqueAdded]);

    

  

 



  

    return (
        <RubriqueEnseignantContext.Provider
            value={{
             
                rubriqueSelectedEns,
                updateRubriqueSelectedEns,
                updateRubriqueAdded,
                rubriqueAdded
                
            }}
        >
            {children}
        </RubriqueEnseignantContext.Provider>
    );
};
