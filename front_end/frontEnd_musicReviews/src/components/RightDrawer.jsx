import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import { MessageRounded, FactCheckRounded, StorageRounded, CardMembershipRounded } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

const data = [
  { icon: <FactCheckRounded />, label: 'Verification' },
  { icon: <CardMembershipRounded />, label: 'Credentials' },
  { icon: <StorageRounded />, label: 'Storage' },
  { icon: <MessageRounded />, label: 'Messages' },
];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function RightDrawer() {
  const [open, setOpen] = React.useState(true);

  // Detect if the screen width is less than or equal to 960px
  const isMobile = useMediaQuery('(max-width:960px)');

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        right: '0',
        top: '12vh',
        width: isMobile ? '58px' : '15vw',
        height: '100%',
        transition: 'width 0.3s ease',
      }}
    >
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256, width: '100%' }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}></ListItemIcon>
              {!isMobile && (
                <ListItemText
                  sx={{ my: 0, color: 'rgb(157, 241, 232)' }}
                  primary="Wallet"
                  style={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }}
                />
              )}
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountCircleRounded color="primary" />
                </ListItemIcon>
                {!isMobile && (
                  <ListItemText
                    primary="User Profile"
                    sx={{
                      color: 'rgb(157, 241, 232)',
                      fontWeight: 'medium',
                      variant: 'body2',
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
            <Divider />
            <Box>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                }}
              >
                <ListItemText
                  primary={!isMobile && 'User Wallet'}
                  sx={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                    color: 'rgb(157, 241, 232)',
                  }}
                  secondary={
                    !isMobile &&
                    'Verification, Credentials, Messages, Storage'
                  }
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: 1,
                    opacity: !isMobile && open ? 1 : 0,
                    transition: '0.2s',
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: ' rgb(157, 241, 232)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    {!isMobile && (
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    )}
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
