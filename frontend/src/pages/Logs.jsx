import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { DataGrid } from '@mui/x-data-grid';

const Logs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const logData = [
    {
      id: 1,
      machine: 'Winding Machine X',
      technician: 'Sarah Williams',
      date: '2023-06-20',
      action: 'Replaced bearings',
      remarks: 'Found worn out bearings during routine check'
    },
    {
      id: 2,
      machine: 'Loom Machine 1',
      technician: 'Jane Smith',
      date: '2023-06-15',
      action: 'Adjusted tension',
      remarks: 'Machine was producing uneven fabric'
    },
    {
      id: 3,
      machine: 'Compressor Unit A',
      technician: 'Mike Johnson',
      date: '2023-06-10',
      action: 'Changed oil and filters',
      remarks: 'Regular maintenance as per schedule'
    },
    {
      id: 4,
      machine: 'Spinning Machine',
      technician: 'John Doe',
      date: '2023-06-05',
      action: 'Cleaned and lubricated',
      remarks: 'Preventive maintenance'
    },
    {
      id: 5,
      machine: 'Loom Machine 2',
      technician: 'Robert Brown',
      date: '2023-05-28',
      action: 'Replaced faulty sensor',
      remarks: 'Temperature sensor was giving erratic readings'
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'machine', headerName: 'Machine', flex: 1 },
    { field: 'technician', headerName: 'Technician', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'action', headerName: 'Action Taken', flex: 1 },
    { field: 'remarks', headerName: 'Remarks', flex: 2 },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
          Maintenance Logs
        </Typography>
      </Box>

      <Box
        mt="20px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={logData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Logs;