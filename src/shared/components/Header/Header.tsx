// IMPORTS
import { Logo } from "@/shared/components/SVG/Logo";
import { Navbar } from "./sub";
import { IconButton } from "@mui/material";
import { MAIN_TITLE } from "@/constants/consts";
import LogoutIcon from "@mui/icons-material/LogoutRounded";

export const Header = () => {
  const content = (
    <section className="header">
      <div className="header__menu">
        <Logo />

        <div className="header__menu--line" />

        <div className="header__menu--nav">
          <h1>{MAIN_TITLE}</h1>

          <Navbar />
        </div>
      </div>
      <div className="header__info">
        <div className="header__info--user">
          <h5 className="header__info--user--name">نام و نام خانوادگی</h5>
          <h5 className="header__info--user--role">نقش</h5>
        </div>

        <div className="header__info--logout">
          <IconButton sx={{ color: "#fff" }}>
            <LogoutIcon
              sx={{
                transform: "rotate(180deg)",
                color: "#fff",
              }}
            />
          </IconButton>
        </div>
      </div>
    </section>
  );
  return content;
};
