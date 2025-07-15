import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import MachineCard from '../components/MachineCard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode || 'dark');

  const machineData = [
    {
      id: 1,
      name: 'Spinning Machine',
      status: 'OK',
      lastMaintenance: '2023-05-15',
      nextMaintenance: '2023-08-15',
      sensorData: {
        Vibration: '2.5 m/s²',
        Speed: '1450 RPM'
      }
    },
    {
      id: 2,
      name: 'Loom Machine',
      status: 'Warning',
      lastMaintenance: '2023-04-20',
      nextMaintenance: '2023-07-20',
      sensorData: {
        RPM: '850',
        Temp: '42°C',
        Vibration: '3.1 m/s²'
      }
    },
    {
      id: 3,
      name: 'Compressor Unit',
      status: 'OK',
      lastMaintenance: '2023-06-01',
      nextMaintenance: '2023-09-01',
      sensorData: {
        Current: '8.2 A',
        Vibration: '1.8 m/s²'
      }
    },
    {
      id: 4,
      name: 'Winding Machine',
      status: 'Faulty',
      lastMaintenance: '2023-03-10',
      nextMaintenance: '2023-06-10',
      sensorData: {
        RPM: '1200',
        Overheating: 'Yes'
      }
    }
  ];

  const alertData = [
    { name: 'Jan', alerts: 2 },
    { name: 'Feb', alerts: 3 },
    { name: 'Mar', alerts: 6 },
    { name: 'Apr', alerts: 4 },
    { name: 'May', alerts: 5 },
    { name: 'Jun', alerts: 7 },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Typography 
        variant="h3" 
        color={colors.grey[100]} 
        fontWeight="bold"
        textAlign="center"
        mb="20px"
      >
        Machine Monitoring Dashboard
      </Typography>

      {/* Machine Cards */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap="20px"
        mb="30px"
      >
        {machineData.map((machine) => (
          <MachineCard key={machine.id} {...machine} colors={colors} />
        ))}
      </Box>

      {/* Charts Section */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
      >
        {/* Bar Chart */}
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="4px"
          boxShadow={3}
        >
          <Typography 
            variant="h5" 
            fontWeight="600" 
            mb="20px"
            color={colors.grey[100]}
          >
            Monthly Alerts
          </Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={alertData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grey[400]} />
              <XAxis dataKey="name" stroke={colors.grey[100]} />
              <YAxis stroke={colors.grey[100]} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: colors.primary[500],
                  borderColor: colors.grey[500]
                }} 
              />
              <Legend />
              <Bar dataKey="alerts" fill={colors.greenAccent[500]} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Pie Summary */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="4px"
          boxShadow={3}
        >
          <Typography 
            variant="h5" 
            fontWeight="600" 
            mb="20px"
            color={colors.grey[100]}
            textAlign="center"
          >
            Machine Status Summary
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              width="180px"
              height="180px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={`10px solid ${colors.greenAccent[500]}`}
              mb="20px"
              boxShadow={3}
            >
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                color={colors.grey[100]}
              >
                75%
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around" width="100%">
              <Box textAlign="center">
                <Typography color={colors.greenAccent[500]} fontWeight="bold">OK</Typography>
                <Typography color={colors.grey[100]}>
                  {machineData.filter(m => m.status === 'OK').length}
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography color={colors.redAccent[500]} fontWeight="bold">Faulty</Typography>
                <Typography color={colors.grey[100]}>
                  {machineData.filter(m => m.status === 'Faulty').length}
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography color={colors.blueAccent[500]} fontWeight="bold">Warning</Typography>
                <Typography color={colors.grey[100]}>
                  {machineData.filter(m => m.status === 'Warning').length}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;




