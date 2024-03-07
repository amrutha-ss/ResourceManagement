import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const EmployeeData = ({ employeeRefetch, setEmployeeRefetech }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/fetchEmployee');
        setEmployees(response.data);
        setEmployeeRefetech(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [employeeRefetch]);

  return (
    <Box>
      <Typography variant="h5">Employee List</Typography>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Typography variant="body1">{employee.emp_name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default EmployeeData;
