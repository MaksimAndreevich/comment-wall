import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";
import Entrance from "./Entrance";
import Wall from "./Wall";

const MainLayout = observer(() => {
  const store = useStore("mainStore");

  if (!store.hasName()) return <Entrance />;
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
});

export default MainLayout;
