// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
// import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

// function TableWithMove() {
//     const tableData = [
//         { order: 1, column1: 'Row 1 Data 1', column2: 'Row 1 Data 2' },
//         { order: 2, column1: 'Row 2 Data 1', column2: 'Row 2 Data 2' },
//         { order: 3, column1: 'Row 3 Data 1', column2: 'Row 3 Data 2' },
//         { order: 4, column1: 'Row 4 Data 1', column2: 'Row 4 Data 2' },
//         { order: 5, column1: 'Row 5 Data 1', column2: 'Row 5 Data 2' },
//         // You can add more rows with data as needed
//     ];
//     const [data, setData] = useState(tableData);

//     const moveRow = (index: number, direction: number) => {
//         const newData = [...data];
//         const movedItem = newData.splice(index, 1)[0];
//         const targetIndex = index + direction;
//         newData.splice(targetIndex, 0, movedItem);

//         // Update order
//         newData.forEach((item, index) => {
//             item.order = index + 1;
//         });

//         setData(newData);
//     };

//     return (
//         <TableContainer>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Action</TableCell>
//                         <TableCell>Ordre</TableCell>
//                         <TableCell>Column 1</TableCell>
//                         <TableCell>Column 2</TableCell>
//                         {/* Add more columns if needed */}
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {data.map((row, index) => (
//                         <TableRow key={index} style={{ transition: 'margin 0.3s ease', margin: '5px 0' }}>
//                             <TableCell>
//                                 <IconButton onClick={() => moveRow(index, -1)} disabled={index === 0}>
//                                     <ArrowUpward />
//                                 </IconButton>
//                                 <IconButton onClick={() => moveRow(index, 1)} disabled={index === data.length - 1}>
//                                     <ArrowDownward />
//                                 </IconButton>
//                             </TableCell>
//                             <TableCell>{row.order}</TableCell>
//                             <TableCell>{row.column1}</TableCell>
//                             <TableCell>{row.column2}</TableCell>
//                             {/* Add more cells if needed */}
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

// function Tab() {
//     return (
//         <div>
//             <h1>Table with Move</h1>
//             <TableWithMove />
//         </div>
//     );
// }

// export default Tab;

import React from "react";
import ListComponent from "../../composants/List/list";
import RubriqueForm from "../../components/RubriqueForm";
import { useContext } from "react";
import { RubriqueContext, trierParOrdre } from "../../context/rubriqueContext";
import {  RUBRIQUE_COLUMNS } from "../../constants";
import {
    supprimerColonnesId,
    trouverRubrique
} from "../../context/rubriqueContext";


const RubriquePage: React.FC = () => {
    const {
        rubriqueList,
        rubriqueListError,
        removeRubrique,
        deleteRubriqueError,
        modifyRubriqueError,
        updateCurrentRubrique,
        
       
    } = useContext(RubriqueContext);

  

    
    
    // Données fictives
    
    const getR = () =>{
        if(rubriqueList){
            const dat = supprimerColonnesId(trierParOrdre(rubriqueList));
            return  dat;
        }
        return null;
        
    }
   const dat = getR();

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
                data={dat ? dat.reverse() : []}
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
