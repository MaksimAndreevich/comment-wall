import { Box, Button, FormControl, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useStore } from "../stores";

const Entrance = () => {
  const store = useStore("mainStore");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const saveFullName = () => {
    if (!firstName || !lastName) return;

    const fullName = `${firstName} ${lastName}`;
    store.setUserName(fullName);
    setFirstName("");
    setLastName("");
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: "auto",
          margin: "auto",
        }}
      >
        <FormControl
          onKeyPress={(event) => {
            if (event.key === "Enter") saveFullName();
          }}
        >
          <TextField
            sx={{ margin: 1 }}
            label={"Имя"}
            required
            margin="normal"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
            variant="outlined"
          />
          <TextField
            sx={{ margin: 1 }}
            label={"Фамилия"}
            required
            margin="normal"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
            variant="outlined"
          />
          <Box sx={{ padding: 1 }}>
            <Button
              onClick={saveFullName}
              color="secondary"
              fullWidth
              size="medium"
              type="submit"
              variant="outlined"
              disabled={!firstName || !lastName}
            >
              Войти
            </Button>
          </Box>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Entrance;
