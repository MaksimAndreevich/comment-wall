import SubmitPostBox from "./SubmitPostBox";
import Posts from "./Posts";
import { Box } from "@mui/material";

const Wall = () => {
  return (
    <Box
      sx={{
        width: "60%",
        padding: 1,
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <SubmitPostBox />
      <Posts />
    </Box>
  );
};

export default Wall;
