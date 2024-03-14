import React, { useEffect, useState } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import axios from "axios";


const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const columns = [
    {
        accessorKey: "id",
        header: "Id",
        size: 100,
        enableColumnFilter: false,
        enableEditing: false,
        enableSorting: false,
    },
    {
        accessorKey: "emp_name",
        header: "Employee Name",
        size: 150,
        enableEditing: false,
        enableColumnFilter: true,
    },
];

monthNames.forEach((month) => {
    columns.push({
        header: month,
        footer: "Total",
        accessorKey: month.toLowerCase(),
        size: 100,
        enableEditing: true,
        enableColumnFilter: true,
    });
});



const FetchEmployee = ({ employeeRefetch, setEmployeeRefetech }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("api/fetchEmployee").then((response) => {
            setData(response.data);
            setEmployeeRefetech(false);
        });
    }, [employeeRefetch]);

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnPinning: true,
        enablePagination: false,
        initialState: {
            columnPinning: { left: ["id", "emp_name"] },

        },
        enableFullScreenToggle: false,
        enableEditing: true,
        editDisplayMode: "table", //cell
        columnFilterDisplayMode: "popover",
        // MuiTablePaperProps: { PaperProps: { elevation: 0 } }
    });

    return (
        <>
            <MaterialReactTable table={table} />
        </>
    );
};

export default FetchEmployee;
