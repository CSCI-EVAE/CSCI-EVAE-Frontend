import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import {
    AddCircleOutline,
    Edit,
    Delete,
    Visibility,
} from "@mui/icons-material";
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import { ListContext } from "../../context/listContext";
import ButtonComponent from "../Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { LIST_ACTIONS } from "../../constants";

interface Column {
    id: string;
    label: string;
}
interface Props {
    title: string;
    columns: Column[];
    data: any[];
    actions: boolean;
    details?: boolean;
    remove?: boolean;
    modify?: boolean;
    create?: boolean;
    detailsHandler?: (rowData: any) => void;
    modifyHandler?: (rowData: any) => void;
    deleteHandler?: (rowData: any) => void;
    createHandler?: (rowData: any) => void;
    modifyElement?: ReactNode;
    addElement?: ReactNode;
    handleAdd?: (rowData: any) => void;
}

const ListComponent: React.FC<Props> = ({
    title,
    columns,
    data,
    actions,
    create,
    createHandler,
    remove,
    deleteHandler,
    details,
    detailsHandler,
    modify,
    modifyElement,
    addElement,
    handleAdd,
    modifyHandler,
}) => {
    const [filters, setFilters] = useState<{ [key: string]: string }>({});
    const { openModal, updateModalOpen, selectedRow, updateSelectedRow } =
        useContext(ListContext);
    const [selectedAction, setSelectedActions] = useState<any | null>(null);
    

    const handleFilterChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        columnId: string
    ) => {
        setFilters({ ...filters, [columnId]: e.target.value });
    };

    const [dataset, setDataset] = useState(data);
    useEffect(()=>{
        setDataset(data);
    },[data]);

    const moveRow = (index: number, direction: number) => {
        const newData = [...dataset];
        const movedItem = newData.splice(index, 1)[0];
        const targetIndex = index + direction;
        newData.splice(targetIndex, 0, movedItem);

        // Update order
        newData.forEach((item, index) => {
            item.order = index + 1;
        });

        setDataset(newData);
    };

    const filteredData = dataset.filter((row: any) => {
        return Object.entries(filters).every(([columnId, filter]) => {
            return String(row[columnId])
                .toLowerCase()
                .includes(filter.toLowerCase());
        });
    });

    return (
        <div
            style={{
                maxWidth: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2>{title}</h2>
            <ButtonComponent
                text="Ajouter"
                variant="text"
                icon={<AddCircleOutline />}
                onClick={() => {
                    setSelectedActions(LIST_ACTIONS.add);
                    updateModalOpen(true);
                    updateSelectedRow({});
                }}
            />

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {columns.map((column) => (
                    <TextField
                        key={column.id}
                        label={`Filtrer par ${column.label}`}
                        variant="outlined"
                        value={filters[column.id] || ""}
                        onChange={(e) => handleFilterChange(e, column.id)}
                        style={{ marginRight: "10px" }}
                        
                    />
                ))}
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#d1def0" }}>
                            <TableCell style={{ fontWeight: "bold" }}>ORDRE</TableCell>
                            {columns.map((column) => (
                                
                                <TableCell
                                
                                    style={{ fontWeight: "bold" }}
                                    key={column.id}
                                >
                                    {column.label.toUpperCase()}
                                </TableCell>
                            ))}
                            {actions && (
                                <TableCell style={{ fontWeight: "bold" }}>
                                    ACTIONS
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row : any, rowIndex:any) => (
                            <TableRow
                                key={rowIndex}
                                style={{
                                    backgroundColor:
                                        rowIndex % 2 === 0 ? "#fffff" : "#f9f9f9",
                                }}
                            >
                                <TableCell>
                                    <IconButton onClick={() => moveRow(rowIndex, -1)} disabled={rowIndex === 0}>
                                        <ArrowUpward />
                                    </IconButton>
                                    <IconButton onClick={() => moveRow(rowIndex, 1)} disabled={rowIndex === data.length - 1}>
                                        <ArrowDownward />
                                    </IconButton>
                                </TableCell>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={`${rowIndex}-${colIndex}`}>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                                {actions && (
                                    <TableCell>
                                        {create && (
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedActions(LIST_ACTIONS.create);
                                                    updateSelectedRow(row);
                                                    createHandler && createHandler(row);
                                                }}
                                            >
                                                <AddCircleIcon />
                                            </IconButton>
                                        )}
                                        {details && (
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedActions(LIST_ACTIONS.read);
                                                    updateSelectedRow(row);
                                                    detailsHandler && detailsHandler(row);
                                                }}
                                            >
                                                <Visibility />
                                            </IconButton>
                                        )}
                                        {modify && (
                                            <>
                                                <IconButton
                                                    onClick={() => {
                                                        modifyHandler && modifyHandler(row);
                                                        setSelectedActions(LIST_ACTIONS.update);
                                                        updateModalOpen(true);
                                                        updateSelectedRow(row);
                                                    }}
                                                >
                                                    <Edit />
                                                </IconButton>
                                            </>
                                        )}
                                        {remove && (
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedActions(LIST_ACTIONS.delete);
                                                    updateModalOpen(true);
                                                    updateSelectedRow(row);
                                                }}
                                            >
                                                <Delete />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {selectedRow && actions && selectedAction && (
                <Dialog
                    open={openModal}
                    onClose={() => updateModalOpen(false)}
                    PaperProps={{
                        style: {
                            width: 500,
                            border: "1px solid #ccc",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            overflowY: "auto",
                        },
                    }}
                >
                    <DialogTitle>{selectedRow.name}</DialogTitle>
                    <DialogContent>
                        {selectedAction === LIST_ACTIONS.update && modifyElement}
                        {selectedAction === LIST_ACTIONS.delete && (
                            <div>Êtes-vous sûr de vouloir supprimer ?</div>
                        )}
                        {selectedAction === LIST_ACTIONS.add && addElement}
                    </DialogContent>
                    <DialogActions>
                        {selectedAction === LIST_ACTIONS.delete && (
                            <>
                                <ButtonComponent
                                    text="Oui"
                                    onClick={() => {
                                        deleteHandler && deleteHandler(selectedRow);
                                        console.log(selectedRow);
                                        updateModalOpen(false);
                                    }}
                                />
                                <ButtonComponent
                                    onClick={() => updateModalOpen(false)}
                                    text="Non"
                                />
                            </>
                        )}
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default ListComponent;
