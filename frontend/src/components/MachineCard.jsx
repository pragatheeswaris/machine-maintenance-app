import React from 'react';
import { Box, Typography } from '@mui/material';

const MachineCard = ({
  name,
  status,
  lastMaintenance,
  nextMaintenance,
  sensorData,
  colors = {}
}) => {
  const safeColors = {
    primary: colors.primary || { 400: '#434957', 500: '#141b2d' },
    greenAccent: colors.greenAccent || { 500: '#4cceac' },
    redAccent: colors.redAccent || { 500: '#db4f4a' },
    grey: colors.grey || { 100: '#e0e0e0', 500: '#666666' },
  };

  return (
    <Box
      backgroundColor={safeColors.primary[400]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="20px"
      borderRadius="4px"
      boxShadow={3}
      height="100%"
    >
      
      <Typography variant="h6" fontWeight="600" color={safeColors.grey[100]}
      textAlign="center"
  sx={{ wordBreak: 'break-word', fontSize: '1rem' }}>
        {name}
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" my="10px">
        <Box
          width="15px"
          height="15px"
          borderRadius="50%"
          backgroundColor={
            status === 'OK' ? safeColors.greenAccent[500] :
            status === 'Warning' ? '#FFA500' :
            safeColors.redAccent[500]
          }
          mr="5px"
        />
        <Typography variant="h6" color={safeColors.grey[100]}>
          {status}
        </Typography>
      </Box>

      <Box width="100%" mt="15px">
        <Typography variant="body1" color={safeColors.grey[100]}>
          Last Maintenance: {lastMaintenance}
        </Typography>
        <Typography variant="body1" color={safeColors.grey[100]}>
          Next Maintenance: {nextMaintenance}
        </Typography>
      </Box>

      {sensorData && (
        <Box width="100%" mt="15px">
          <Typography variant="h6" color={safeColors.greenAccent[500]} mb="5px">
            Sensor Data:
          </Typography>
          {Object.entries(sensorData).map(([key, value]) => (
            <Typography key={key} variant="body2" color={safeColors.grey[100]}>
              {key}: {value}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};


export default MachineCard;