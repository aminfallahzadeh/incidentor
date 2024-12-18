// IMPORTS
import { useNavigate } from "react-router-dom";
import { TitlePrimaryProps } from "./types";
import { IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import HomeIcon from "@mui/icons-material/HomeOutlined";

export const Title = () => {
  return null;
};

Title.Primary = function Primary({ back, title, home }: TitlePrimaryProps) {
  const navigate = useNavigate();

  return (
    <div className="u-container u-container__blue u-container__between">
      {home && (
        <IconButton onClick={() => navigate("/incidentor/")}>
          <HomeIcon />
        </IconButton>
      )}

      <div className="title">
        <h1 className="title__text">{title}</h1>
      </div>

      {back && (
        <IconButton onClick={() => navigate(-1)}>
          <BackIcon />
        </IconButton>
      )}
    </div>
  );
};
