import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

interface Props {
  children: React.ReactElement;
  postsRef: React.MutableRefObject<HTMLElement | undefined>;
}

function ScrollTop(props: Props) {
  const { children, postsRef } = props;

  const trigger = useScrollTrigger({
    target: postsRef.current,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (postsRef.current && postsRef.current.firstElementChild) {
      postsRef.current.firstElementChild.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 32, right: 32 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default ScrollTop;
