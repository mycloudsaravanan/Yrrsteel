import { Button, Container, Divider, Paper, Stack, TextField, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>
        <Typography color="text.secondary">
          Tell us about your steel requirements and our team will get back to you with tailored support.
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              VIJAYALAKSHMI INDUSTRIES
            </Typography>
            <Typography color="text.secondary">No.5, 2nd Street, 6th Lane</Typography>
            <Typography color="text.secondary">Harbour Colony, Kodangiyur</Typography>
            <Typography color="text.secondary">Chennai - 600118</Typography>
            <Typography color="text.secondary">GSTIN/UIN: 33ANBPG7577L1ZP</Typography>
            <Typography color="text.secondary">State Name: Tamil Nadu, Code: 33</Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack component="form" spacing={2} noValidate>
            <TextField label="Full Name" fullWidth required />
            <TextField label="Company" fullWidth required />
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Phone" type="tel" fullWidth required />
            <TextField label="Message" fullWidth required multiline minRows={4} />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
