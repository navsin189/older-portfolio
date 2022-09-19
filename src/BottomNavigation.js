import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Link from "@mui/material/Link";
import PDF from "./NaveenKSingh_CV.pdf"
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ backgroundColor: "#FF5733",display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:5 }}
      value={value}
      onChange={handleChange}
    >
      <Link href="https://linkedin.com/in/navsin189" target="_blank">
        <BottomNavigationAction
          value="Linkedin"
          icon={<LinkedInIcon sx={{ color: "white" }} />}
        />
      </Link>
      <Link href="https://github.com/navsin189" target="_blank">
        <BottomNavigationAction
          value="Github"
          icon={<GitHubIcon sx={{ color: "white" }} />}
        />
      </Link>
      <Link href="mailto:navsin189@gmail.com" target="_blank">
        <BottomNavigationAction
          value="mail"
          icon={<AlternateEmailIcon sx={{ color: "white" }} />}
        />
      </Link>
      <Link href="https://sunnykkc13.medium.com" target="_blank">
        <BottomNavigationAction
          value="Blog"
          icon={<RssFeedIcon sx={{ color: "white" }} />}
        />
      </Link>
      <Link href={PDF} download>
        <BottomNavigationAction
          value="Blog"
          icon={<FilePresentIcon sx={{ color: "white" }} />}
        />
      </Link>
    </BottomNavigation>
  );
}
