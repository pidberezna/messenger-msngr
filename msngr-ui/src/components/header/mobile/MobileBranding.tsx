import { Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import router from '../../Routes';

const MobileBranding = () => {
  return (
    <>
      <ChatBubbleOutlineIcon
        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          cursor: 'pointer',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        MSNGR
      </Typography>
    </>
  );
};

export default MobileBranding;
