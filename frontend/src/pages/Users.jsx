import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const userData = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@cottonfab.com',
      phone: '9876543210',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Supervisor 1',
      email: 'supervisor1@cottonfab.com',
      phone: '8765432109',
      role: 'supervisor'
    },
    {
      id: 3,
      name: 'Technician 1',
      email: 'tech1@cottonfab.com',
      phone: '7654321098',
      role: 'technician'
    },
    {
      id: 4,
      name: 'Technician 2',
      email: 'tech2@cottonfab.com',
      phone: '6543210987',
      role: 'technician'
    },
    {
      id: 5,
      name: 'Viewer 1',
      email: 'viewer1@cottonfab.com',
      phone: '5432109876',
      role: 'viewer'
    }
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === 'admin'
                ? colors.greenAccent[600]
                : role === 'supervisor'
                ? colors.blueAccent[600]
                : colors.redAccent[600]
            }
            borderRadius="4px"
          >
            {role === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {role === 'supervisor' && <SecurityOutlinedIcon />}
            {role === 'technician' && <LockOpenOutlinedIcon />}
            {role === 'viewer' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {role}
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
          User Management
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
        <DataGrid rows={userData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Users;