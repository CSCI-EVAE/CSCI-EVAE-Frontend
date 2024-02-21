import React, { useState } from 'react';
import {  TableCell, List, ListItem,ListItemIcon, ListItemButton } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { questionsInRubrique } from '../../types/rubriquesComposeTypes ';
const MyTableQuestion = (props :any) => {
  const data  = props.questions;
  const [dataset, setDataset] = useState<questionsInRubrique[]>(data);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
  
    const newItems = Array.from(dataset);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
  
    // Mise à jour de l'ordre de chaque élément
    //  newItems.forEach((item, index) => {
    //   item.order = index + 1;
    //    if(item.ordre){
    //      item.ordre = item.order;
    //    };
    //  });
    // console.log(newItems);
  
    setDataset(newItems);
  };


  return (
    <>
     <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="questItems">
                    {(provided : any) => (
    <List
    {...provided.droppableProps} ref={provided.innerRef}
    style={{
      maxWidth: "90%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
  }}
  
    >
          <>
          {dataset.map((row , index:number)=> (
             <Draggable key={row.idQuestion} draggableId={String(row.idQuestion)} index={index}>
             {(provided : any) => (
            <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >

               <TableCell style={{width:'90%'}}>{row.intitule}</TableCell>
               {/* <ListItemText style={{width:'90%'}}>{row.intitule}</ListItemText> */}

                <ListItemButton
                        
                        sx={{ display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end" }}
                        >
                          <ListItemIcon><DeleteSweepIcon/></ListItemIcon>
                        </ListItemButton>
                </ListItem>
             )}
                           
             </Draggable>
          ))}
           {provided.placeholder}
          </>
          
          </List>
          )}
          </Droppable>
          </DragDropContext>
          </>
  );
};

export default MyTableQuestion;
