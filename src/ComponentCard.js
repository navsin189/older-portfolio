import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from '@mui/material/Link';
import { common } from '@mui/material/colors';
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function DisplayCard(props) {
  return (
    <Card sx={{ maxWidth: 345, marginRight: "15px", marginBottom: "15px" }}>
      <CardMedia
        component="img"
        alt={props.pr.heading}
        height="140"
        image={props.pr.display}
      />
      <CardContent sx={{height: "200px",overflowX:"hidden",}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.pr.heading}
          {props.pr.git && <Link href={props.pr.githubRepo} target="_blank">
          <Tooltip title="Github">
          <IconButton>
            <GitHubIcon sx={{ color: common.black }} />
          </IconButton>
        </Tooltip>
        </Link>}
        </Typography>
        
        {props.pr.description.map((item,index) => (
          <Typography variant="body2" color="text.secondary" key={index}>
            - {item}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
