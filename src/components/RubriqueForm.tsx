import React, { useContext } from "react";
import { TextField, Box, Typography } from "@mui/material";
import ButtonComponent from "../composants/Button";
import {
    RubriqueContext,
   trouverRubrique, getMaxOrdre
} from "../context/rubriqueContext";
import { ListContext } from "../context/listContext";
interface rubriqueFormProps {
    add: boolean; 
}

const RubriqueForm: React.FC<rubriqueFormProps> = ({ add }) => {
    const {
        
        rubrique,
        updateCurrentRubrique,
        addNewRubrique,
        modifyRubrique,
        rubriqueList,
    } = useContext(RubriqueContext);
    const { updateModalOpen, selectedRow } = useContext(ListContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        if(rubrique.ordre <= getMaxOrdre(rubriqueList)){
            alert("Ordre déjà utilisé");
            return;
        }
        if (add === true) {
            
            addNewRubrique({...rubrique, type : "STANDARD",
            noEnseignant : {
                id : "1"
            }});
        } else {

            const rubriqueModify = trouverRubrique(selectedRow, rubriqueList);
            
            modifyRubrique(rubriqueModify?.id, {...rubrique, id : rubriqueModify?.id, type :rubriqueModify?.type,  noEnseignant :rubriqueModify?.noEnseignant});
        }

        updateModalOpen(false);
    };
    const handleReset = () => {
        updateModalOpen(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {" "}
                Entrez les informations
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <TextField
                    label="Désignation"
                    variant="outlined"
                    value={rubrique.designation}
                    onChange={(e) => updateCurrentRubrique({...rubrique, designation : e.target.value})}
                    required
                />
                  <TextField
                    label="Ordre"
                    variant="outlined"
                    value={rubrique.ordre}
                    onChange={(e) => updateCurrentRubrique({...rubrique, ordre : e.target.value})}
                    required
                />
                
            </Box>
            <Box sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}>
                <ButtonComponent
                    text="Valider"
                    type="submit"
                    variant="contained"
                />

                <ButtonComponent
                    text="Annuler"
                    onClick={handleReset}
                    type="reset"
                    variant="contained"
                />
            </Box>
        </form>
    );
};

export default RubriqueForm;
