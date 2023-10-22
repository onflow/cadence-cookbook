import PropTypes from "prop-types";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import SpeedDial from "@mui/material/SpeedDial";
import Typography from "@mui/material/Typography";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useResponsive } from "src/hooks/use-responsive";
import { fDate } from "src/utils/format-time";
import { bgGradient } from "src/theme/css";
import Iconify from "src/components/iconify";
import { useRouter } from "next/navigation";
import { Icon } from "@mui/material";

export default function PostDetailsHero({
  title,
  author,
  coverUrl,
  createdAt,
  playgroundLink,
}) {
  const theme = useTheme();

  const smUp = useResponsive("up", "sm");

  const { push } = useRouter();

  return (
    <Box
      sx={{
        height: 480,
        overflow: "hidden",
        ...bgGradient({
          imgUrl: coverUrl,
          startColor: `${alpha(theme.palette.grey[900], 0.64)} 0%`,
          endColor: `${alpha(theme.palette.grey[900], 0.64)} 100%`,
        }),
        borderRadius: 2,
        ml: { xs: 3, md: 15 },
        mr: { xs: 3, md: 15 },
      }}
    >
      <Container sx={{ height: 1, position: "relative" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            zIndex: 9,
            color: "common.white",
            maxWidth: 480,
            pt: { xs: 4, md: 6 },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            zIndex: 9,
            color: "common.white",
            maxWidth: 480,
            pt: { xs: 2, md: 2 },
          }}
        >
          {fDate(createdAt)}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            zIndex: 9,
            color: "common.white",
            maxWidth: { xs: "90%", md: "50%" },
            pt: { xs: 2, md: 2 },
          }}
        >
          <i>Contributed by</i> {author}
        </Typography>

        <Stack
          sx={{
            left: 0,
            width: 1,
            bottom: 0,
            mt: 37,
            ml: 2,
            position: "relative",
          }}
        >
          <SpeedDial
            direction={smUp ? "left" : "up"}
            ariaLabel="Share post"
            icon={<Iconify icon="solar:share-bold" />}
            FabProps={{ size: "medium" }}
            sx={{
              position: "absolute",
              bottom: { xs: 32, md: 64 },
              right: { xs: 16, md: 24 },
            }}
          >
            <SpeedDialAction
              onClick={() => {
                push(playgroundLink);
              }}
              key="Flow Playground"
              icon={
                <Icon sx={{ height: "100%", mb: 3, width: "100%" }}>
                  <img src="/assets/icons/flow_link.svg" />
                </Icon>
              }
              tooltipTitle="Flow Playground"
              tooltipPlacement="top"
              FabProps={{ color: "default" }}
            />
          </SpeedDial>
        </Stack>
      </Container>
    </Box>
  );
}

PostDetailsHero.propTypes = {
  author: PropTypes.string,
  coverUrl: PropTypes.string,
  createdAt: PropTypes.string,
  title: PropTypes.string,
};
