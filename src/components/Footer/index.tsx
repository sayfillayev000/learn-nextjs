import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { format } from "date-fns";

const Footer = () => {
  return (
    <Box
      padding="20px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <Typography variant="h4">
        {format(new Date(), "yyyy")} Sammi nimadir
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Telegram sx={{ cursor: "pointer" }}>One</Telegram>
        <Instagram sx={{ cursor: "pointer" }}>Two</Instagram>
        <YouTube sx={{ cursor: "pointer" }}>Two</YouTube>
      </Box>
    </Box>
  );
};

export default Footer;
