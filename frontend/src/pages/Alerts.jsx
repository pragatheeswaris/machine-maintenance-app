import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { DataGrid } from '@mui/x-data-grid';

const Alerts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const alertData = [
    {
      id: 1,
      machine: 'Winding Machine X',
      type: 'Overheating',
      severity: 'High',
      date: '2023-06-15',
      time: '14:30',
      status: 'Pending'
    },
    {
      id: 2,
      machine: 'Loom Machine 1',
      type: 'Vibration',
      severity: 'Medium',
      date: '2023-06-14',
      time: '09:45',
      status: 'In Progress'
    },
    {
      id: 3,
      machine: 'Compressor Unit A',
      type: 'Current Spike',
      severity: 'High',
      date: '2023-06-10',
      time: '16:20',
      status: 'Resolved'
    },
    {
      id: 4,
      machine: 'Spinning Machine B',
      type: 'Speed Fluctuation',
      severity: 'Low',
      date: '2023-06-08',
      time: '11:15',
      status: 'Resolved'
    },
    {
      id: 5,
      machine: 'Loom Machine 2',
      type: 'Temperature',
      severity: 'Medium',
      date: '2023-06-05',
      time: '13:50',
      status: 'Resolved'
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'machine', headerName: 'Machine', flex: 1 },
    { field: 'type', headerName: 'Alert Type', flex: 1 },
    {
      field: 'severity',
      headerName: 'Severity',
      flex: 1,
      renderCell: ({ row: { severity } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              severity === 'High'
                ? colors.redAccent[600]
                : severity === 'Medium'
                ? colors.blueAccent[600]
                : colors.greenAccent[600]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {severity}
            </Typography>
          </Box>
        );
      },
    },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === 'Pending'
                ? colors.redAccent[600]
                : status === 'In Progress'
                ? colors.blueAccent[600]
                : colors.greenAccent[600]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
          Alerts
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
        <DataGrid rows={alertData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Alerts;