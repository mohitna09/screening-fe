import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Input from "./components/input";
import axios from "axios";
import appConfig from "./config/app-config";
import axiosInstance from "./utils/axiosInstance";

function App() {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [name, setName] = useState();

  const greetingHandler = () => {
    setIsLoading(true);
    setResponse(null);
    setError(null);

    axiosInstance
      .get("/api/greet", {
        params: {
          name,
        },
      })
      .then((response) => {
        setResponse(response.data?.message);
      })
      .catch((e) => {
        setError(e?.response?.data?.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onClick={greetingHandler}
        buttonText={"Get Greeting"}
      />

      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Typography variant="h6">
          {error && <>{error}</>}
          {response && <>{response}</>}
        </Typography>
      )}
    </Box>
  );
}

export default App;
