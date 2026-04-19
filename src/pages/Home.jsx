import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link as RouterLink } from 'react-router-dom';

const highlights = [
  {
    icon: <EngineeringIcon color="primary" fontSize="large" />,
    title: 'Industrial Expertise',
    description: 'Decades of hands-on steel processing experience for modern construction and manufacturing projects.',
  },
  {
    icon: <PrecisionManufacturingIcon color="primary" fontSize="large" />,
    title: 'Precision Products',
    description: 'Consistent quality in every beam, sheet, and custom steel component we deliver.',
  },
  {
    icon: <VerifiedIcon color="primary" fontSize="large" />,
    title: 'Trusted Quality',
    description: 'Strong quality control and dependable logistics ensure your timeline stays on track.',
  },
];

export default function Home() {
  return (
    <>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 700 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
              Building Strength with Premium Steel Solutions
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.95 }}>
              Yrrsteel delivers reliable steel products for infrastructure, fabrication, and industrial projects worldwide.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} to="/products" size="large" variant="contained" color="secondary">
                Explore Products
              </Button>
              <Button component={RouterLink} to="/contact" size="large" variant="outlined" color="inherit">
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {highlights.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack spacing={2}>
                    {item.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
