import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { scrollToTop } from '../utils/helpers';

interface IScrollTopProps {
  children: React.ReactElement;
  postsRef: React.MutableRefObject<HTMLElement | undefined>;
}

const ScrollTop = ({ children, postsRef }: IScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: postsRef.current,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (postsRef.current) scrollToTop(postsRef.current);
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} sx={{ position: 'fixed', bottom: 32, right: 32 }}>
        {children}
      </Box>
    </Fade>
  );
};

export default ScrollTop;
