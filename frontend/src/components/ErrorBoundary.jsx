import { ErrorBoundary } from 'react-error-boundary';
import { Box, Typography, Button } from '@mui/material';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" color="error" gutterBottom>
        Application Error
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: 'error.main' }}>
        {error.message}
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={resetErrorBoundary}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}