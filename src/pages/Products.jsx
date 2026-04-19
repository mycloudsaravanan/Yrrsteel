import { Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';

const products = [
  {
    name: 'Structural Steel Sections',
    details: 'I-beams, channels, angles, and hollow sections for commercial and industrial construction.',
    tag: 'Construction',
  },
  {
    name: 'Steel Plates & Sheets',
    details: 'Hot-rolled and cold-rolled products for fabrication, pressure vessels, and machinery.',
    tag: 'Fabrication',
  },
  {
    name: 'Pipes & Tubes',
    details: 'Reliable welded and seamless solutions suitable for fluid transport and structural use.',
    tag: 'Infrastructure',
  },
  {
    name: 'Custom Processing',
    details: 'Cutting, drilling, and finishing services to match your exact engineering requirements.',
    tag: 'Custom',
  },
];

export default function Products() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Products
        </Typography>
        <Typography color="text.secondary">
          We provide a broad steel portfolio designed to support demanding industrial and infrastructure applications.
        </Typography>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.name} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {product.name}
                      </Typography>
                      <Chip label={product.tag} color="primary" size="small" />
                    </Stack>
                    <Typography color="text.secondary">{product.details}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
