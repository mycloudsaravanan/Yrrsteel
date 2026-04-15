import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navButtons = navItems.map((item) => (
    <Button
      key={item.path}
      component={RouterLink}
      to={item.path}
      color="inherit"
      sx={{
        fontWeight: location.pathname === item.path ? 700 : 500,
        borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
        borderRadius: 0,
      }}
    >
      {item.label}
    </Button>
  ));

  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Yrrsteel
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{navButtons}</Box>

          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack spacing={1} sx={{ width: 220, p: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={() => setOpen(false)}
              variant={location.pathname === item.path ? 'contained' : 'text'}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
