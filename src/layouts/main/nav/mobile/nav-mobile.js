"use client";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";

import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useBoolean } from "src/hooks/use-boolean";
import { usePathname } from "src/routes/hooks";
import Logo from "src/components/logo";
import SvgColor from "src/components/svg-color";
import Scrollbar from "src/components/scrollbar";
//
import NavList from "./nav-list";

// ----------------------------------------------------------------------

export default function NavMobile({ offsetTop, data }) {
  const pathname = usePathname();

  const nav = useBoolean();

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton
        onClick={nav.onTrue}
        sx={{
          ml: 1,
          ...(offsetTop && {
            color: "text.primary",
          }),
        }}
      >
        <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
      </IconButton>

      <Drawer
        open={nav.value}
        onClose={nav.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <Stack direction="row">
            <Logo sx={{ mx: 2.5, my: 3 }} />
            <Typography sx={{ ml:-1, mt: 4, fontSize: "16px" }}>
              <strong>Cadence Cookbook</strong>
            </Typography>
          </Stack>

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>

        
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
  offsetTop: PropTypes.bool,
};
