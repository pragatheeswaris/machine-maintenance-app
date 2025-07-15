import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { DataGrid } from '@mui/x-data-grid';

const Schedule = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Complete Maintenance Schedule Data
  const scheduleData = [
    // Spinning Machine
    {
      id: 1,
      machine: 'Spinning Machine',
      maintenanceType: 'Routine Cleaning',
      frequency: 'Daily',
      duration: '30 mins',
      nextService: '2025-07-10 08:00',
      technician: 'John D.',
      status: 'Scheduled',
    },
    {
      id: 2,
      machine: 'Spinning Machine',
      maintenanceType: 'Bearing Lubrication',
      frequency: 'Weekly',
      duration: '2 hours',
      nextService: '2025-07-13 10:00',
      technician: 'Sarah M.',
      status: 'Pending',
    },
    {
      id: 3,
      machine: 'Spinning Machine',
      maintenanceType: 'Motor Alignment Check',
      frequency: 'Monthly',
      duration: '1.5 hours',
      nextService: '2025-07-20 09:00',
      technician: 'Mike T.',
      status: 'Scheduled',
    },

    // Loom Machine
    {
      id: 4,
      machine: 'Loom Machine',
      maintenanceType: 'Shuttle Replacement',
      frequency: 'Monthly',
      duration: '4 hours',
      nextService: '2025-07-18 11:00',
      technician: 'Raj P.',
      status: 'Pending',
    },
    {
      id: 5,
      machine: 'Loom Machine',
      maintenanceType: 'Tension Calibration',
      frequency: 'Weekly',
      duration: '2 hours',
      nextService: '2025-07-12 14:00',
      technician: 'Emma K.',
      status: 'Completed',
    },
    {
      id: 6,
      machine: 'Loom Machine',
      maintenanceType: 'Thread Guide Cleaning',
      frequency: 'Bi-Weekly',
      duration: '1 hour',
      nextService: '2025-07-14 09:00',
      technician: 'Ravi S.',
      status: 'Scheduled',
    },

    // Compressor Unit
    {
      id: 7,
      machine: 'Compressor Unit',
      maintenanceType: 'Oil Change',
      frequency: 'Bi-Monthly',
      duration: '3 hours',
      nextService: '2025-07-25 11:00',
      technician: 'Anita G.',
      status: 'Pending',
    },
    {
      id: 8,
      machine: 'Compressor Unit',
      maintenanceType: 'Pressure Valve Test',
      frequency: 'Monthly',
      duration: '2 hours',
      nextService: '2025-07-21 10:30',
      technician: 'Kumar L.',
      status: 'Scheduled',
    },

    // Winding Machine
    {
      id: 9,
      machine: 'Winding Machine',
      maintenanceType: 'Tension Adjustment',
      frequency: 'Weekly',
      duration: '1.5 hours',
      nextService: '2025-07-13 14:00',
      technician: 'Nina P.',
      status: 'Completed',
    },
    {
      id: 10,
      machine: 'Winding Machine',
      maintenanceType: 'Spool Replacement',
      frequency: 'Monthly',
      duration: '2 hours',
      nextService: '2025-07-22 09:00',
      technician: 'Hari R.',
      status: 'Scheduled',
    },

    // All Machines
    {
      id: 11,
      machine: 'All Machines',
      maintenanceType: 'Full Inspection',
      frequency: 'Quarterly',
      duration: '1 day',
      nextService: '2025-08-01 08:00',
      technician: 'Team A',
      status: 'Pending',
    },
    {
      id: 12,
      machine: 'All Machines',
      maintenanceType: 'Safety Compliance Audit',
      frequency: 'Bi-Annual',
      duration: '1 day',
      nextService: '2025-12-01 09:00',
      technician: 'Audit Team',
      status: 'Scheduled',
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'machine', headerName: 'Machine', flex: 1 },
    { field: 'maintenanceType', headerName: 'Maintenance Type', flex: 1.5 },
    { field: 'frequency', headerName: 'Frequency', flex: 1 },
    { field: 'duration', headerName: 'Duration', flex: 1 },
    { field: 'nextService', headerName: 'Next Service', flex: 1.5 },
    { field: 'technician', headerName: 'Technician', flex: 1 },
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
              status === 'Completed'
                ? colors.greenAccent[600]
                : status === 'Pending'
                ? colors.redAccent[600]
                : colors.blueAccent[600]
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
          Maintenance Schedule
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
        }}
      >
        <DataGrid rows={scheduleData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Schedule;
