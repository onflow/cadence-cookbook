// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";
import { bgBlur } from "src/theme/css";
import Logo from "src/components/logo";
import { Typography } from "@mui/material";
import PostSearch from "src/sections/blog/post-search";
import { HEADER } from "../config-layout";
// eslint-disable-next-line import/no-cycle
import { HeaderShadow } from ".";
import { navConfig } from "../main/config-navigation";
import NavMobile from "../main/nav/mobile/nav-mobile";
import NavDesktop from "../main/nav/desktop/nav-desktop";


export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo sx={{ml: -3}}/>
          <Typography sx={{ml: 1, fontSize: "16px"}}><strong>Cadence Cookbook</strong></Typography>

         

          {mdUp && <Stack sx={{ml: 5}}><PostSearch  query="Test" results={[]} /></Stack>}

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack
            alignItems="center"
            direction={{ xs: "row", md: "row-reverse" }}
          >
            <Button
              sx={{backgroundColor: "#08ec8c"}}
              variant="contained"
              target="_blank"
              rel="noopener"
              href=""
            >
              Contribute
            </Button>

            {/* <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            /> */}

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
