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
          <FireNav component="nav">
            <Box component="a" href="#customized-list" p={2} sx={{ fontSize:'12px', fontWeight:700}}>
              
              {!isMobile && (
             <button
             size="small"
             variant="outlined"
             style={{
               border: 'solid 1px rgb(157, 241, 232)',
               borderRadius: '50px',
               backgroundColor: 'transparent',
               color: 'rgb(157, 241, 232)',
        
               padding: '0.8em 1.2em',
               cursor: 'pointer',
               height: '80%',
               transition: 'all 0.3s ease',
             }}
             onMouseEnter={(e) => {
               e.target.style.backgroundColor = 'rgb(157, 241, 232)';
               e.target.style.color = 'rgb(5, 30, 52)';
             }}
             onMouseLeave={(e) => {
               e.target.style.backgroundColor = 'transparent';
               e.target.style.color = 'rgb(157, 241, 232)';
             }}
           >
             Connect Wallet
           </button>
              )}
            </Box>
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
                  primary={!isMobile && 'App Wallet'}
                  sx={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                    color: 'rgb(157, 241, 232)',
                  }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: 1,
                    opacity: !isMobile && open ? 1 : 1,
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
                        sx={{
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
