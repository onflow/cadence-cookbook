"use client";

import PropTypes from "prop-types";
import { useEffect } from "react";
// @mui
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Portal from "@mui/material/Portal";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// routes
import { usePathname } from "src/routes/hooks";
import { useActiveLink } from "src/routes/hooks/use-active-link";
//
import { NavItem, NavItemDashboard } from "./nav-item";
import { StyledSubheader, StyledMenu } from "./styles";
import Image from "src/components/image";
import { Typography } from "@mui/material";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

export default function NavList({ item, offsetTop }) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes("http");

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />

      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{ display: "flex" }}
            >
              {children.map((list) => (
                <>
                  <Stack sx={{ padding: 3, width: "25%", mt: "-3%" }}>
                    <Image
                      sx={{ mb: 3, borderRadius: 2 }}
                      ratio="1/1"
                      src={`/assets/illustrations/flow/nav/${list.position}.png`}
                    ></Image>

                    <NavSubList
                      key={list.subheader}
                      subheader={list.subheader}
                      subheaderSlug={list.slug}
                      items={list.items}
                      isDashboard={list.subheader === "Dashboard"}
                      onClose={nav.onFalse}
                    />
                  </Stack>
                </>
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
};

// ----------------------------------------------------------------------

function NavSubList({ items, isDashboard, subheader, subheaderSlug, onClose }) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={2}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        pb: 2,
        ...(isDashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items
        .slice(0, 5)
        .map((item) =>
          isDashboard ? (
            <NavItemDashboard key={item.title} item={item} onClick={onClose} />
          ) : (
            <NavItem
              subItem
              key={item.title}
              item={item}
              active={pathname === `${item.path}/`}
              onClick={onClose}
            />
          )
        )}

      {items.length > 5 && (
        <NavItem
          subItem
          key={`${subheader}-more`}
          item={{ title: "More", path: paths.module(subheaderSlug) }}
          active={false}
          onClick={onClose}
        />
      )}
    </Stack>
  );
}

NavSubList.propTypes = {
  isDashboard: PropTypes.bool,
  items: PropTypes.array,
  onClose: PropTypes.func,
  subheader: PropTypes.string,
};
