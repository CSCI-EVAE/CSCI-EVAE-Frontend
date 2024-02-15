import React from "react";
import ListComponent from "../../composants/List";
import RubriqueForm from "../../components/RubriqueForm";
import { useContext } from "react";
import { RubriqueContext, trierParOrdre } from "../../context/rubriqueContext";
import {  RUBRIQUE_COLUMNS } from "../../constants";
import {
    supprimerColonnesId,
    trouverRubrique,
} from "../../context/rubriqueContext";


const RubriquePage: React.FC = () => {
    const {
        rubriqueList,
        rubriqueListError,
        removeRubrique,
        deleteRubriqueError,
        modifyRubriqueError,
        updateCurrentRubrique
       
    } = useContext(RubriqueContext);

    console.log("rub  : ",rubriqueList)
    // Données fictives
    const dat = supprimerColonnesId(trierParOrdre(rubriqueList));
    //const dat = [{"designation" : "Cours"},{"designation" : "Tp"},{"designation" : "CM"}, ]

    // Handlers pour les actions

    const handleEdit = (rowData: any) => {
        console.log("Modifier:", rowData);
        updateCurrentRubrique(rowData);
        
        
    };

    const handleDelete = (rowData: any) => {
        console.log("Supprimer:", rowData);
        
        const currentRub = trouverRubrique(rowData, rubriqueList);
        removeRubrique(currentRub?.id);
        
       
    
    };

    return (
        <div>
            <div style={{ textAlign: "center", color: "red" }}>
                {rubriqueListError && rubriqueListError}
                {deleteRubriqueError && deleteRubriqueError}
                {modifyRubriqueError&& modifyRubriqueError}
            </div>
            <ListComponent
             
            
                title={"Liste des Rubriques"}
                columns={RUBRIQUE_COLUMNS}
                data={dat.reverse()}
                actions={true}
                remove={true}
                deleteHandler={handleDelete}
                modify={true}
                modifyElement={
                    <div>
                        <RubriqueForm add={false} />
                    </div>
                }
                modifyHandler={handleEdit}
                addElement={
                    <div>
                        <RubriqueForm add={true} />
                    </div>
                }
                
            />
        </div>
    );
};

export default RubriquePage;
