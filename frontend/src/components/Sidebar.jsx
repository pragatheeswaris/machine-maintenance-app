import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  ElectricBoltOutlined,
  WarningAmberOutlined,
  CalendarTodayOutlined,
  ListAltOutlined,
  PeopleOutlined
} from '@mui/icons-material';

const Sidebar = ({ isSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const menuItems = [
    { title: "Dashboard", icon: <HomeOutlined />, link: "/dashboard" },
    { title: "Machines", icon: <ElectricBoltOutlined />, link: "/machines" },
    { title: "Alerts", icon: <WarningAmberOutlined />, link: "/alerts" },
    { title: "Schedule", icon: <CalendarTodayOutlined />, link: "/schedule" },
    { title: "Logs", icon: <ListAltOutlined />, link: "/logs" },
    { title: "Users", icon: <PeopleOutlined />, link: "/users" }
  ];

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height="100vh"
      width={isSidebar ? "250px" : "0"}
      sx={{
        overflow: "hidden",
        transition: "width 0.3s ease",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
        borderRight: `1px solid ${colors.primary[600]}`
      }}
    >
      {isSidebar && (
        <>
          <Box m="25px 0 0 20px">
            <Typography 
              variant="h3" 
              color={colors.greenAccent[500]}
              fontWeight="bold"
              sx={{ fontSize: '1.5rem' }} // Adjusted font size
            >
              COTTON FAB
            </Typography>
            <Typography 
              variant="h5" 
              color={colors.grey[100]}
              sx={{ fontSize: '1rem', mt: 1 }} // Adjusted font size
            >
              MACHINE MONITORING
            </Typography>
          </Box>

          <Box pt="40px">
            {menuItems.map((item, index) => (
              <Box key={index} m="15px 20px">
                <Link
                  to={item.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: colors.grey[100],
                    textDecoration: "none",
                    gap: "10px",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    fontSize: '1rem', // Consistent font size
                    '&:hover': {
                      backgroundColor: colors.primary[300],
                    }
                  }}
                >
                  {item.icon}
                  <Typography sx={{ fontSize: '1rem' }}>{item.title}</Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;