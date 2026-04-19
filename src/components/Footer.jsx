import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Yrrsteel. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
