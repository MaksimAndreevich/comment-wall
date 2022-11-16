import { Box } from "@mui/material";
import Wall from "./Wall";

const MainLayout = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Wall />
    </Box>
  );
};

export default MainLayout;
