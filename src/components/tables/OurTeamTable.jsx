import React from "react";
import { IconButton, TableCell } from "@mui/material";
import TableCellContainer from "./TableCellContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const OurTeamTable = ({ tid, name, duration, ...props }) => {
    const onDelete = async (e) => {
        e.stopPropagation();
        const res = window?.confirm("Вы действительно хотите коллегу " + name + '?');
        if (res) {
            await deleteDoc(doc(db, "ourTeam", tid));
            window?.location?.reload()
        }
    };
    return (
        <TableCellContainer path={`/our-team/${tid}`}>
            <TableCell component="th" scope="row">
                {tid}
            </TableCell>

            <TableCell scope="row">{name}</TableCell>
            <TableCell scope="row">{props?.transportList?.length || 0}</TableCell>
            <TableCell scope="row">{duration}</TableCell>
            <TableCell scope="row">
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableCellContainer>
    );
};
export default OurTeamTable;
