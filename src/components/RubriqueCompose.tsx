import React, { useState } from 'react';
import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


interface RubriqueItem {
  id: string;
  content: string;
  order: number;
}



const RubriqueCompose= () => {
    const title = "AAA";
    const items: RubriqueItem[] = [
        { id: '1', content: 'Élément 1', order: 1 },
        { id: '2', content: 'Élément 2', order: 2 },
        { id: '3', content: 'Élément 3', order: 3 },
        { id: '4', content: 'Élément 4', order: 4 },
      ];
      
  const [rubriqueItems, setRubriqueItems] = useState<RubriqueItem[]>(items);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
  
    const newItems = Array.from(rubriqueItems);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
  
    // Mise à jour de l'ordre de chaque élément
    newItems.forEach((item, index) => {
      item.order = index + 1;
    });
    console.log(newItems);
  
    setRubriqueItems(newItems);
  };
  

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="rubriqueItems">
          {(provided : any) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {rubriqueItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided : any) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItemText primary={item.content} />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default RubriqueCompose;
