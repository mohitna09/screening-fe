import { Button, TextField } from "@mui/material";

const InputComponent = (props) => {
  const { onClick, buttonText, ...muiProps } = props;

  return (
    <TextField
      variant="outlined"
      sx={{
        width: "60%",
      }}
      slotProps={{
        input: {
          endAdornment: (
            <Button
              sx={{
                width: 200,
              }}
              onClick={onClick}
              variant="contained"
            >
              {buttonText}
            </Button>
          ),
        },
      }}
      {...muiProps}
    />
  );
};

export default InputComponent;
