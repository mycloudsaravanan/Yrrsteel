import { Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>
        <Typography color="text.secondary">
          Tell us about your steel requirements and our team will get back to you with tailored support.
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Stack component="form" spacing={2}>
            <TextField label="Full Name" fullWidth required />
            <TextField label="Company" fullWidth />
            <TextField label="Email" type="email" fullWidth required />
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
