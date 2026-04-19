import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          About Us
        </Typography>
        <Typography color="text.secondary">
          Yrrsteel is a customer-focused steel solutions provider committed to quality, innovation, and long-term partnerships.
          We support contractors, manufacturers, and distributors with dependable products and responsive service.
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Our Mission
              </Typography>
              <Typography color="text.secondary">
                To supply world-class steel materials that strengthen communities, empower industry, and create sustainable value.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Our Vision
              </Typography>
              <Typography color="text.secondary">
                To become a globally trusted steel brand known for product excellence, reliability, and technical support.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Why Choose Yrrsteel
          </Typography>
          <Typography color="text.secondary">
            We combine robust sourcing, modern processing capabilities, and strict quality checks to deliver steel products you can
            trust. Our team works closely with clients to understand project needs and provide tailored recommendations.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
