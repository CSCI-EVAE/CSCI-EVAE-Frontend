import React from "react";
import ListComponent from "../../components/common/List/list";
import { useContext } from "react";
import { RubriqueComposeContext } from "../../context/rubriqueComposeContext";
import {  RUBRIQUE_COLUMNS } from "../../constants";

import RubriqueComposeView from "../../components/RubriqueComposeView";
import RubriqueComposeAdd from "../../components/RubriqueComposeAdd";
import Sidebar from "../../components/Layout/sideBar/SidebarPage";


const RubriquePage: React.FC = () => {
    const {
     
        rubriqueComposeList,
      
        updateCurrentRubriqueCompose,
        rubriqueComposeListError,
        removeRubriqueCompose,
        deleteRubriqueComposeError,
        modifyRubriqueComposeError,
       
       

        
       
    } = useContext(RubriqueComposeContext);

      
    const getR = () =>{
        if(rubriqueComposeList){
            const dat  = rubriqueComposeList;
            console.log("dat", dat);
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
        
       // const currentRub = trouverRubriqueCompose(rowData, rubriqueComposeList);
        removeRubriqueCompose(rowData.id);
        
       
    
    };
    const handleView = (rowData: any) => {
        console.log("vue:", rowData);
        updateCurrentRubriqueCompose(rowData);
        
        
        
       
    
    };


    return (
        <div>
            <div style={{ textAlign: "center", color: "red" }}>
                {rubriqueComposeListError && rubriqueComposeListError}
                {deleteRubriqueComposeError && deleteRubriqueComposeError}
                {modifyRubriqueComposeError&& modifyRubriqueComposeError}
            </div>
            <Sidebar />
            <ListComponent
             
                details={true}
                detailsElement={
                    <div>
                        <RubriqueComposeView/>
                    </div>
                }
                detailsHandler={handleView}
                title={"Liste des Rubriques Composes"}
                columns={RUBRIQUE_COLUMNS}
                data={dat ? dat.reverse() : []}
                actions={true}
                remove={true}
                deleteHandler={handleDelete}
                modify={true}
                modifyElement={
                    <div>
                        <RubriqueComposeAdd add={false} />
                    </div>
                }
                modifyHandler={handleEdit}
                addElement={
                    <div>
                        <RubriqueComposeAdd add={true} />
                    </div>
                }
                
            />
        </div>
    );
};

export default RubriquePage;
