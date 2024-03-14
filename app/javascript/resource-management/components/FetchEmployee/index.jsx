import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import axios from 'axios';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, ThemeProvider, createTheme } from '@mui/material';

const myTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(103, 79, 192)',
    },
  },
});

const FetchEmployee = ({ employeeRefetch, setEmployeeRefetech }) => {
  const [combinedData, setCombinedData] = useState([]);
  const [changesMade, setChangesMade] = useState(false);
  const [changedCellValues, setChangedCellValues] = useState([]);
  const [open, setOpen] = useState(false);

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const columns = [
    {
      accessorKey: 'id',
      header: 'Id',
      size: 100,
      enableColumnFilter: false,
      enableEditing: false,
      enableSorting: false,
      enableResizing: false,
    },
    {
      accessorKey: 'emp_name',
      header: 'Employee Name',
      size: 200,
      enableResizing: true,
      enableEditing: false,
      enableColumnFilter: true,
    },
  ];

  monthNames.forEach((month) => {
    columns.push({
      header: month,
      accessorKey: month.toLowerCase(),
      editVariant: "select",
      editSelectOptions: ["Yes", "No"],
      size: 100,
      enableEditing: true,
      enableColumnFilter: true,
      enableResizing: false,
      filterVariant: "select",
      filterSelectOptions: ["Yes", "No"],
      aggregationFn: 'sum',
      Footer: () => (
        <Stack>
          Billable: {footerData[month]}
        </Stack>
      ),
    });
  });

  useEffect(() => {
    axios.get('api/fetchEmployeeBilling').then((response) => {
      const { billing_data, employee_data } = response.data;
      const mergedData = mergeData(billing_data, employee_data);
      setCombinedData(mergedData);
      setEmployeeRefetech(false);
    });
  }, [employeeRefetch]);

  const mergeData = (billingData, employeeData) => {
    const employeeMap = {};
    employeeData.forEach(employee => {
      employeeMap[employee.id] = {
        id: employee.id,
        emp_name: employee.emp_name,
        ...Object.fromEntries(monthNames.map(month => [month.toLowerCase(), ''])),
      };
    });

    billingData.forEach(billing => {
      const { emp_id, month_name, is_billable } = billing;
      if (employeeMap[emp_id]) {
        employeeMap[emp_id][month_name] = is_billable ? "Yes" : "No";
      }
    });
    return Object.values(employeeMap);
  };

  const handleCellValueChange = (emp_id, month_name, is_billable) => {
    const existingIndex = changedCellValues.findIndex(item => item.emp_id === emp_id && item.month_name === month_name);
    if (existingIndex !== -1) {
      const newValues = [...changedCellValues];
      newValues[existingIndex].is_billable = is_billable;
      setChangedCellValues(newValues);
    } else {
      setChangedCellValues(prevValues => [...prevValues, { emp_id, month_name, is_billable }]);
    }
    setChangesMade(true);
  }

  const handleSave = () => {
    changedCellValues.forEach(({ emp_id, month_name, is_billable }) => {
      const existingIndex = combinedData.findIndex(item => item.id == emp_id);
      if (existingIndex !== -1) {
        const employee = combinedData[existingIndex];
        if (employee[month_name] !== '') {
          axios.patch("api/editBillingInfo", {
            emp_id,
            month_name,
            is_billable
          }).then(() => {
            console.log("Edit Done");
          }).catch(() => {
            console.log("Edit error");
          });
        }
        else {
          axios.post("api/createBilling", {
            resource: {
              emp_id,
              month_name,
              is_billable
            }
          }).then(() => {
            console.log("Create Done");
          }).catch(() => {
            console.log("Create error");
          });
        }
      }
    });
    setChangesMade(false);
    setChangedCellValues([]);
  }

  const handleDiscard = () => {
    setOpen(true);
  }

  const handleAgreeClose = () => {
    setOpen(false);
    setChangesMade(false);
    setChangedCellValues([]);
    window.location.reload();
  }
  const handleDisagreeClose = () => {
    setOpen(false);
  }

  const handleCellEdit = (emp_id, month_name, is_billable) => {
    handleCellValueChange(emp_id, month_name, is_billable);
    setChangesMade(true);
  }

  const footerData = useMemo(() => {
    const count = {};
    monthNames.forEach(month => {
      count[month] = combinedData.reduce((count, item) => (item[month.toLowerCase()] === 'Yes' ? count + 1 : count), 0);
    });
    return count;
  }, [combinedData]);

  const table = useMaterialReactTable({
    columns,
    data: combinedData,
    enableColumnPinning: true,
    enablePagination: false,
    initialState: {
      showColumnFilters: true,
      columnPinning: { left: ['id', 'emp_name'] },
    },
    enableFullScreenToggle: false,
    enableEditing: true,
    editDisplayMode: 'cell',
    enableBottomToolbar: false,
    enableColumnResizing: true,
    positionGlobalFilter: 'right',
    muiTableBodyCellProps: ({ cell }) => ({
      onBlur: () => {
        const newValue = cell.getValue();
        const rowId = cell.row.original.id;
        const columnId = cell.column.id;
        handleCellEdit(rowId, columnId, newValue);
      },
    }),
    renderTopToolbarCustomActions: () => (
      <Box>
        {changesMade && (
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained" onClick={handleSave} >SAVE</Button>
            <Button variant='contained' color='error' onClick={handleDiscard}>DISCARD</Button>
          </Box>
        )}
      </Box>
    ),
  });

  return (
    <ThemeProvider theme={myTheme}>
      <MaterialReactTable table={table} />
      <Dialog open={open} >
        <DialogTitle >
          Discard Changes
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to discard the changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagreeClose}>CANCEL</Button>
          <Button onClick={handleAgreeClose} autoFocus variant='contained' color='error'>
            DISCARD
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default FetchEmployee;

