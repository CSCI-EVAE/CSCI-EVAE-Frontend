import React from "react";
import ListComponent from "../../composants/List";
import QuestionForm from "../../components/QuestionForm";
import { useContext } from "react";
import { QuestionContext, trouverIdQuestion } from "../../context/questionContext";
import { Question_COLUMNS } from "../../constants";
import {
    supprimerColonnesId,
    
} from "../../context/questionContext";

const QuestionPage: React.FC = () => {
    const {
        questionListe,
        questionListError,
        removeQuestion,
        deleteQuestionError,
        modifyQuestionError,
        updateQuestionintitule,
        updateCoupleQualificatif
    } = useContext(QuestionContext);

   // Données fictives
    const dat = supprimerColonnesId(questionListe);
    console.log("data", dat);


    const handleEdit = (rowData: any) => {
        console.log("Modifier:", rowData);
        console.log("Intitulé:", rowData.intitulֹ); 
        console.log("intitule",rowData.maximal);

        updateQuestionintitule(rowData.intitulֹ);
       
        updateCoupleQualificatif(`${rowData.maximal}-${rowData.minimal}`);
    };
    

    const handleDelete = (rowData: any) => {
        console.log("Supprimer:", rowData);
        const id_supp = trouverIdQuestion(rowData, questionListe);
        //console.log("id de suppression: "+id_supp);
        removeQuestion(id_supp);
    };

    return (
        <div>
             <div style={{ textAlign: "center", color: "red" }}>
                {questionListError && questionListError}
                {deleteQuestionError && deleteQuestionError}
                {modifyQuestionError&& modifyQuestionError}
            </div>
            <ListComponent
                title={"Liste des questions"}
                columns={Question_COLUMNS}
                data={dat.reverse()}
                actions={true}
                remove={true}
                deleteHandler={handleDelete}
                modify={true}
                modifyElement={
                    <div>
                        <QuestionForm add={false} />
                    </div>
                }
                modifyHandler={handleEdit}
                addElement={
                    <div>
                        <QuestionForm add={true} />
                    </div>
                }
            /> 
        </div>
    );
};

export default QuestionPage;
