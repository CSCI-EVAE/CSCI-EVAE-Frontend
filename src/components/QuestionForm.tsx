import React, { useContext, useEffect } from "react";
import { TextField, Box, Typography } from "@mui/material";
import Select from "../composants/Select";
import ButtonComponent from "../composants/Button";
import {
    QuestionContext,
    trouverIdQuestion,
} from "../context/questionContext";
import { ListContext } from "../context/listContext";
import { QualificatifContext } from "../context/qualificatifContext";
import { Qualificatif } from "../types/qualificatifTypes";
interface questionFormProps {
    add: boolean; 
}

const QuestionForm: React.FC<questionFormProps> = ({ add }) => {
    
    const {
        questionListe,
        questionintitule,
        updateQuestionintitule,
        addNewQuestion,
        modifyQuestion,
        coupleQualificatif
        
    } = useContext(QuestionContext);
  
    const {
        qualificatifList
    }  = useContext(QualificatifContext);

    const [selectedQualificatif, setSelectedQualificatif] = React.useState<string >(coupleQualificatif);
    useEffect(()=>{
        setSelectedQualificatif(coupleQualificatif);
    },[coupleQualificatif])
    //  const [initialIntitule, setInitialIntitule] = useState<any | undefined>(undefined);
  
        const transformedQuestionListe = qualificatifList.map((qualificatif: Qualificatif) => ({
            label: `${qualificatif.maximal}-${qualificatif.minimal}`,
            value: `${qualificatif.maximal}-${qualificatif.minimal}`,
            idLabel: "ID qualificatif", 
            idValue: qualificatif.id 
        }));
        // function handleQualificatifChange(value: string | number | (string | number)[]): void {
        //     if (Array.isArray(value)) {
        //         setSelectedQualificatif(value[0]); 
        //     } else {
        //         setSelectedQualificatif(value); 
        //     }
        // }
        
    //console.log(transformedQuestionListe);
   // console.log("Intitlué existant : "+questionintitule);
    const { updateModalOpen, selectedRow } = useContext(ListContext);
    // useEffect(() => {
    //     if (!add && selectedRow) {
    //         const intitul = trouverIntitule(selectedRow, questionListe);
    //         setInitialIntitule(intitul); // Mettre à jour l'intitul initial
    //       //  setInitialIdQualificatif(selectedRow.idQualificatif.id); // Mettre à jour l'idQualificatif initial
    //     }
    // }, [selectedRow, questionListe, add]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (add === true) {
            const selectedQualificatifObj = transformedQuestionListe.find((item: { value: string | number; }) => item.value === selectedQualificatif);
            addNewQuestion({
                idQualificatif: { id: selectedQualificatifObj.idValue},
                noEnseignant: null,
                 type: "Standard",
                 intitulֹ: questionintitule,
            });
        } else {
            const id = trouverIdQuestion(selectedRow, questionListe);
          //  const intitul = trouverIntitule(selectedRow, questionListe);
          
           const selectedQualificatifObj = transformedQuestionListe.find((item: { value: string | number; }) => item.value === selectedQualificatif);

            modifyQuestion(id, {
                idQualificatif: { id: selectedQualificatifObj.idValue },
                noEnseignant: null,
                type: "standart",
                intitulֹ: questionintitule,
            });
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
    <Select
        label="list qualificatif"
        options={transformedQuestionListe} 
        value={selectedQualificatif} 
        onChange={(value) => setSelectedQualificatif(value as string)}
        required
        multiple={false}
        sx={{ width: "50%" }} // Ajustez la largeur comme vous le souhaitez
    />
</Box>
<Box sx={{ display: "flex", gap: "1rem" }}>
    <TextField
        label="intitulֹ"
        variant="outlined"
        value={questionintitule}
        onChange={(e) => updateQuestionintitule(e.target.value)}
        required
        sx={{ width: "50%" }} // Ajustez la largeur comme vous le souhaitez
    />
</Box>
8

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

export default QuestionForm;

