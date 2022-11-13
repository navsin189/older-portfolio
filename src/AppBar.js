import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { context } from "./App";

const pages = [];
const darkImageURL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1536px-Black_colour.jpg";
const lightImageURL =
  "https://htmlcolorcodes.com/assets/images/colors/white-color-solid-background-1920x1080.png";
const darkHelperText = "Dark";
const lightHelperText = "Light";
const darkBg = "#4338ca";
const lightBg = "#FF5733";
const lightColor = "white";
const darkColor = "black";
const darkLogo = "https://i.ytimg.com/vi/6aN7ff1GLyk/maxresdefault.jpg"
const lightLogo = "https://i.pinimg.com/originals/9d/99/b6/9d99b619bf69f00e45fe6a16ed6dd3e4.jpg"

const ResponsiveAppBar = () => {
  const [mode, setMode] = React.useState({
    theme: true,
    helpText: lightHelperText,
    src: lightImageURL,
    bg: lightBg,
    color: lightColor,
    logo: lightLogo
  });
  
  const themeContext = React.useContext(context)
  function themeChange() {
    if (mode.theme) {
      setMode({
        ...mode,
        helpText: darkHelperText,
        src: darkImageURL,
        theme: false,
        bg: darkBg,
        color: darkColor,
        logo: darkLogo,
      });
      themeContext.themeDispatch('Truth')
    } else {
      setMode({
        ...mode,
        helpText: lightHelperText,
        src: lightImageURL,
        theme: true,
        bg: lightBg,
        color: lightColor,
        logo: lightLogo
      });
      themeContext.themeDispatch('False')
    }
  }

  return (
    <AppBar position="static" sx={{ background: mode.bg }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Naveen">
            <IconButton
              sx={{ p: 0, display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <Avatar
                alt="display"
                src={mode.logo}
              />
            </IconButton>
          </Tooltip>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: mode.color,
              textDecoration: "none",
            }}
          >
            NAVEEN
          </Typography>
          <Tooltip title="Naveen">
            <IconButton
              sx={{ p: 0, display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <Avatar
                alt="display"
                src="https://i.pinimg.com/originals/9d/99/b6/9d99b619bf69f00e45fe6a16ed6dd3e4.jpg"
              />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: mode.color,
              textDecoration: "none",
            }}
          >
            NAVEEN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: mode.color, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Typography
            onClick={()=> themeChange()}
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              // display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: mode.color,
              textDecoration: "none",
              cursor: "pointer",
              textTransform: "uppercase"
            }}
          >
            {mode.helpText}
          </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
