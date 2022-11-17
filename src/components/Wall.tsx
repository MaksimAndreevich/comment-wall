import SubmitPostBox from "./SubmitPostBox";
import Posts from "./Posts";
import { Box } from "@mui/material";

const Wall = () => {
  return (
    <Box
      sx={{
        width: "60%",
      }}
    >
      <SubmitPostBox />
      <Posts />
    </Box>
  );
};

export default Wall;
