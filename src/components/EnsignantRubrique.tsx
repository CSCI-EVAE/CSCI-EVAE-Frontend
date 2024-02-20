import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Select from "./common/Select";
import ButtonComponent from "./common/Button";
import {
    QuestionContext,
    
} from "../context/questionContext";

import { ListContext } from "../context/listContext";

import { Question } from "../types/questionTypes";
import { RubriqueComposeContext } from "../context/rubriqueComposeContext";
import { RubriqueCompose } from "../types/rubriquesComposeTypes ";
import { RubriqueEnseignantContext, findRubriqueByDesignation } from "../context/rubriqueEnseignantContext";
interface rubriqueComposeFormProps {
    add: boolean; 
}

const EnseignantRubrique: React.FC<rubriqueComposeFormProps> = ({ add }) => {
   
    const {questionListe} = useContext(QuestionContext);
    const {rubriqueComposeList} = useContext(RubriqueComposeContext);
    const { updateRubriqueAdded, rubriqueAdded} = useContext(RubriqueEnseignantContext);

    const [selectedRubriqueCompose, setSelectedRubriqueCompose] = React.useState<string>("");
    const [selectedQuestionInRubriqueCompose, setSelectedQuestionInRubriqueCompose] = React.useState<string []>([]);


    const { updateModalOpen } = useContext(ListContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
       
        if (add === true) {
            updateRubriqueAdded( findRubriqueByDesignation( rubriqueComposeList,selectedRubriqueCompose));
            console.log(rubriqueAdded);

           
        } else {

              }

        updateModalOpen(false);
    };
    const handleReset = () => {
        updateModalOpen(false);
    };
    const transformedQuestionListe = questionListe.map((question: Question) => ({
        label: `${question.intitule}`,
        value: `${question.intitule}`,
       // idLabel: "ID qualificatif", 
        //idValue: qualificatif.id 
    }));
    const RListe = rubriqueComposeList.map((rubriqueList: RubriqueCompose) => ({
        label: `${rubriqueList.designation}`,
        value: `${rubriqueList.designation}`,
        //idLabel: "ID qualificatif", 
        //idValue: qualificatif.id 
    }));

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
            {add ? (
                 <Box sx={{ display: "flex", gap: "1rem" }}>
                 <Select
                     label="Choisissez la Rubrique"
                     options={RListe} 
                     value={selectedRubriqueCompose} 
                     onChange={(value) => setSelectedRubriqueCompose(value as string)}
                     required
                     multiple={false}
                     sx={{ width: "50%" }} // Ajustez la largeur comme vous le souhaitez
                 />
             </Box>
            ) : (
                <Box sx={{ display: "flex", gap: "1rem" }}>
                <Select
                    label="Choiissiez les questions"
                    options={transformedQuestionListe} 
                    value={selectedQuestionInRubriqueCompose} 
                    onChange={(value) => setSelectedQuestionInRubriqueCompose(value as string [])}
                    required
                    multiple={true}
                    sx={{ width: "50%" }} // Ajustez la largeur comme vous le souhaitez
                />
            </Box>
            )}
           
           
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

export default EnseignantRubrique;
