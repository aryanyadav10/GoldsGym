import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#fff3f4"} borderTop={"2px solid red"}>
      <Stack alignItems={"center"} px="40px" pt="24px">
        <img src={Logo} alt="logo" width={"200px"} height={"40px"} />
        <Typography variant="h5" mt="40px" pb="40px">
          &copy; Aryan Yadav
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
