import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ReactComponent as CreateIcon } from "../../assets/create-24px.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-24px.svg";
import { Referral } from "../../types/referral";
import style from "./ReferralTable.module.css";
import { IconButton } from "../IconButton";

const TableHeadCell: React.FC = ({ children }) => (
    <TableCell classes={{ root: style.tableHeadCell }}>{children}</TableCell>
);

const TableBodyCell: React.FC = ({ children }) => (
    <TableCell classes={{ root: style.tableBodyCell }}>{children}</TableCell>
);

interface ActionBodyCellProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const ActionBodyCell: React.FC<ActionBodyCellProps> = ({
    onEditClick,
    onDeleteClick,
}) => (
    <TableCell classes={{ root: style.actionBodyCell }}>
        <IconButton onClick={onEditClick}>
            <CreateIcon />
        </IconButton>
        <IconButton onClick={onDeleteClick}>
            <DeleteIcon />
        </IconButton>
    </TableCell>
);

interface ReferralTableProps {
    referrals: Referral[];
    onReferralEditClick: (referral: Referral) => void;
    onReferralDeleteClick: (referral: Referral) => void;
}

const MIN_ROWS = 14;

const ReferralTable: React.FC<ReferralTableProps> = ({
    referrals,
    onReferralEditClick,
    onReferralDeleteClick,
}) => {
    const emptyRowDelta = MIN_ROWS - referrals.length;

    return (
        <TableContainer
            classes={{
                root: style.container,
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Given Name</TableHeadCell>
                        <TableHeadCell>Surname</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                        <TableHeadCell>Actions</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {referrals.map((referral) => (
                        <TableRow key={referral.id}>
                            <TableBodyCell>{referral.givenName}</TableBodyCell>
                            <TableBodyCell>{referral.surname}</TableBodyCell>
                            <TableBodyCell>{referral.email}</TableBodyCell>
                            <TableBodyCell>
                                {referral.phoneNumber}
                            </TableBodyCell>
                            <ActionBodyCell
                                onEditClick={() =>
                                    onReferralEditClick(referral)
                                }
                                onDeleteClick={() =>
                                    onReferralDeleteClick(referral)
                                }
                            />
                        </TableRow>
                    ))}
                    {emptyRowDelta > 0 &&
                        Array.from(Array(emptyRowDelta).keys()).map((value) => (
                            <TableRow
                                key={`empty-row-${value}`}
                                classes={{ root: style.emptyTableRow }}
                            >
                                <TableBodyCell />
                                <TableBodyCell />
                                <TableBodyCell />
                                <TableBodyCell />
                                <TableBodyCell />
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { ReferralTable };
