import React from "react";
import ListComponent from "../../composants/List/list";
import RubriqueComposeForm from "../../components/RubriqueComposeForm ";
import { useContext } from "react";
import { RubriqueComposeContext, trierParOrdre } from "../../context/rubriqueComposeContext";
import {  RUBRIQUE_COLUMNS } from "../../constants";
import {
    supprimerColonnesId,
    trouverRubriqueCompose
} from "../../context/rubriqueComposeContext";


const RubriqueComposePage: React.FC = () => {
    const {
        rubriqueComposeList,
        rubriqueComposeListError,
        removeRubriqueCompose,
        deleteRubriqueComposeError,
        modifyRubriqueComposeError,
        updateCurrentRubriqueCompose,
        
       
    } = useContext(RubriqueComposeContext);

  

    
    
    // Données fictives
    
    const getR = () =>{
        if(rubriqueComposeList){
            const dat = supprimerColonnesId(trierParOrdre(rubriqueComposeList));
            return  dat;
        }
        return null;
        
    }
   const dat = getR();

    // Handlers pour les actions

    const handleEdit = (rowData: any) => {
        console.log("Modifier:", rowData);
        updateCurrentRubriqueCompose(rowData);
        
        
    };

    const handleDelete = (rowData: any) => {
        console.log("Supprimer:", rowData);
        
        const currentRub = trouverRubriqueCompose(rowData, rubriqueComposeList);
        removeRubriqueCompose(currentRub?.id);
        
       
    
    };

    return (
        <div>
            <div style={{ textAlign: "center", color: "red" }}>
                {rubriqueComposeListError && rubriqueComposeListError}
                {deleteRubriqueComposeError && deleteRubriqueComposeError}
                {modifyRubriqueComposeError&& modifyRubriqueComposeError}
            </div>
            <ListComponent
             
            
                title={"Liste des RubriqueComposes"}
                details={true}

                columns={RUBRIQUE_COLUMNS}
                data={dat ? dat.reverse() : []}
                actions={true}
                remove={true}
                deleteHandler={handleDelete}
                modify={true}
                modifyElement={
                    <div>
                        <RubriqueComposeForm add={false} />
                    </div>
                }
                modifyHandler={handleEdit}
                addElement={
                    <div>
                        <RubriqueComposeForm add={true} />
                    </div>
                }
                
            />
        </div>
    );
};

export default RubriqueComposePage;
