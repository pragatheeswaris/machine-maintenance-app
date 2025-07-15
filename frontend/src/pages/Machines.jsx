import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import MachineCard from '../components/MachineCard';
import { DataGrid } from '@mui/x-data-grid';

const Machines = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const machineData = [
    {
      id: 1,
      name: 'Spinning Machine',
      type: 'Spinning',
      status: 'OK',
      lastMaintenance: '2023-05-15',
      nextMaintenance: '2023-08-15',
      vibration: '2.5 m/s²',
      speed: '1450 RPM'
    },
    {
      id: 2,
      name: 'Loom Machine 1',
      type: 'Loom',
      status: 'Warning',
      lastMaintenance: '2023-04-20',
      nextMaintenance: '2023-07-20',
      rpm: '850',
      temp: '42°C',
      vibration: '3.1 m/s²'
    },
    {
      id: 3,
      name: 'Compressor Unit A',
      type: 'Compressor',
      status: 'OK',
      lastMaintenance: '2023-06-01',
      nextMaintenance: '2023-09-01',
      current: '8.2 A',
      vibration: '1.8 m/s²'
    },
    {
      id: 4,
      name: 'Winding Machine X',
      type: 'Winding',
      status: 'Faulty',
      lastMaintenance: '2023-03-10',
      nextMaintenance: '2023-06-10',
      rpm: '1200',
      overheating: 'Yes'
    },
    {
      id: 5,
      name: 'Loom Machine 2',
      type: 'Loom',
      status: 'OK',
      lastMaintenance: '2023-05-10',
      nextMaintenance: '2023-08-10',
      rpm: '900',
      temp: '38°C',
      vibration: '2.2 m/s²'
    },
    {
      id: 6,
      name: 'Spinning Machine B',
      type: 'Spinning',
      status: 'OK',
      lastMaintenance: '2023-06-05',
      nextMaintenance: '2023-09-05',
      vibration: '2.1 m/s²',
      speed: '1500 RPM'
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Machine Name', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
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
              status === 'OK'
                ? colors.greenAccent[600] || 'green'
                : status === 'Warning'
                ? colors.blueAccent[600] || 'blue'
                : colors.redAccent[600] || 'red'
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
    { field: 'lastMaintenance', headerName: 'Last Maintenance', flex: 1 },
    { field: 'nextMaintenance', headerName: 'Next Maintenance', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color={colors.grey[100]} fontWeight="bold"
        sx={{ mb: '10px', wordWrap: 'break-word' }}
>
          Machines
        </Typography>
      </Box>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(140px, auto)"
        gap="20px"
      >
        {machineData.slice(0, 4).map(machine => (
          <MachineCard key={machine.id} {...machine} />
        ))}
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
    backgroundColor: colors?.blueAccent?.[700] || '#1976d2',
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: colors?.primary?.[400] || '#1F2A40',
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: colors?.blueAccent?.[700] || '#1976d2',
  },
  "& .MuiCheckbox-root": {
    color: `${colors?.greenAccent?.[500] || '#4cceac'} !important`,
  },
}}

      >
        <DataGrid rows={machineData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Machines;