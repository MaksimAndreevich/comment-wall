import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import Wall from './Wall';

const MainLayout = observer(() => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Wall />
      </Box>
    </>
  );
});

export default MainLayout;
