import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Select from "./common/Select";
import ButtonComponent from "./common/Button";
import {
    QuestionContext,
    
} from "../context/questionContext";

import { ListContext } from "../context/listContext";
import { RubriqueContext } from "../context/rubriqueContext";
import { Rubrique } from "../types/rubriquesTypes";
import { Question } from "../types/questionTypes";
import { CreateRubriqueCompose } from "../types/rubriquesComposeTypes ";
import { RubriqueComposeContext } from "../context/rubriqueComposeContext";
interface rubriqueComposeFormProps {
    add: boolean; 
}

const RubriqueComposeAdd: React.FC<rubriqueComposeFormProps> = ({ add }) => {
   
 
    const {questionListe} = useContext(QuestionContext);
    const {rubriqueList} = useContext(RubriqueContext);

    const [selectedRubriqueCompose, setSelectedRubriqueCompose] = React.useState<string>();
    const [selectedQuestionInRubriqueCompose, setSelectedQuestionInRubriqueCompose] = React.useState<string []>([]);

   // setSelectedRubriqueCompose(rubriqueCompose.designation);
    const { updateModalOpen } = useContext(ListContext);
    const {addNewRubriqueCompose} = useContext(RubriqueComposeContext);
    const handleSubmit = (e: React.FormEvent) => {

        const rubriqueSelected : Rubrique = rubriqueList.find((rubrique  : Rubrique )=> rubrique.designation === selectedRubriqueCompose); 
        const questionsSelected : Question[] =  questionListe.filter((question : Question) => selectedQuestionInRubriqueCompose.includes(question.intitule));
        const rubriqueToAdd : CreateRubriqueCompose = {idRubrique: rubriqueSelected.id ||0, questionsIds:  questionsSelected.map(question => question.id || 0), ordre:1} 
        console.log(rubriqueToAdd);
               e.preventDefault();
       
        if (add === true) {
            addNewRubriqueCompose(rubriqueToAdd);
           
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
    const RListe = rubriqueList.map((rubriqueList: Rubrique) => ({
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

export default RubriqueComposeAdd;
