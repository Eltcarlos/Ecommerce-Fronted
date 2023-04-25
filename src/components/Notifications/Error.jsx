import { Box, Typography } from "@mui/material";

export const InlineError = ({ text }) => {
  return (
    <Box sx={{ color: "red", marginTop: "2px", width: "100%" }}>
      <Typography>{text}</Typography>
    </Box>
  );
};
