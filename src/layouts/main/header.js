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
import { Link, Typography } from "@mui/material";
import PostSearch from "src/sections/blog/post-search";
import { HEADER } from "../config-layout";
import { navConfig } from "./config-navigation";
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { HeaderShadow } from "../_common";
import { recipes } from "src/data/recipes";
import { useState, useCallback } from "react";

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const flattenRecipes = (arr) =>
    arr.flatMap(({ recipes, ...rest }) =>
      recipes.map((o) => ({
        ...rest,
        ...o,
      }))
    );
  const searchOptions = flattenRecipes(recipes);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = useCallback((event) => {
    if (event.target) {
      setSearchQuery(event.target.value);
    }
  }, []);

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
          <Logo sx={{ ml: { md: -3 } }} />
          <Link
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                textDecoration: "none",
              },
              ml: 2,
            }}
            href={"/"}
          >
            <Typography sx={{ ml: 1, fontSize: "16px" }}>
              <strong>Cadence Cookbook</strong>
            </Typography>
          </Link>

          {mdUp && (
            <Stack sx={{ ml: 5 }}>
              <PostSearch
                query={searchQuery}
                onSearch={handleSearch}
                results={searchOptions}
              />
            </Stack>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack
            alignItems="center"
            direction={{ xs: "row", md: "row-reverse" }}
          >
            <Button
              sx={{
                backgroundColor: "#02D87E",
                "&:hover": { backgroundColor: "#3980B6" },
                ml: 2,
              }}
              variant="contained"
              target="_blank"
              rel="noopener"
              href="https://github.com/onflow/cadence-cookbook/blob/main/contribute.md"
            >
              Contribute
            </Button>

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
