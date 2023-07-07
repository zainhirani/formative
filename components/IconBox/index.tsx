import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuizIcon from "@mui/icons-material/Quiz";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { QUIZ } from "configs";
import Image from "theme/Image";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
interface IconBoxProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}
const Img = styled("img")({
  display: "none",
})

const Iconbox = ({ title, description, image, url }: IconBoxProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: (theme) => theme.palette.primary.light,
        p: 2,
        boxShadow: "none",
        borderRadius: "6px",
        border: 1,
        borderColor: "transparent",
        cursor: "pointer",
        " img": {
          filter: "grayscale(1) brightness(3)",
        },
        "&:hover": {
          boxShadow: "0 0 40px rgb(0 0 0 / 10%)",
          borderColor: "#EAEAEA",
          "&:hover .iconColorChange": {
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.light,
          },
          "&:hover img": {
            filter: "grayscale(0) brightness(1)",
          },
        },

      }}
    >
      <Image
        alt="quiz-logo"
        lazyLoadProps={{ height: 50 }}
        src={image}
        lazyLoad={true} 
      />
      <CardContent sx={{ boxShadow: "none", width: 1, padding: "0 0 0 20px" }}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: "250px",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          className="iconColorChange"
          href={url}
          underline="none"
          sx={{
            display: "flex",
            width: "40px;",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
            background: (theme) => theme.palette.primary.light,
            borderRadius: "50px",
            boxShadow: "0 0 40px rgb(0 0 0 / 10%)",
            border: 1,
            borderColor: "#EAEAEA",
            color: (theme) => theme.palette.primary.main,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.light,
            },
          }}
        >
          <ArrowForwardIcon />
        </Link>
      </CardActions>
    </Card>
  );
};

export default Iconbox;
