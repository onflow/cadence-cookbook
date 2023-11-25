import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import SpeedDial from "@mui/material/SpeedDial";
import Typography from "@mui/material/Typography";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useResponsive } from "../../hooks/use-responsive";
import { fDate } from "../../utils/format-time";
import { bgGradient } from "../../theme/css";
import Iconify from "../../components/iconify";
import { useRouter } from "next/navigation";
import { Icon } from "@mui/material";
import { Chip } from "@mui/material";
import { toTitleCase } from "./view/homePageView";


export default function PostDetailsHero({
  title,
  author,
  filters,
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
        height: 380,
        overflow: "hidden",
        ...bgGradient({
          imgUrl: coverUrl,
          startColor: `${alpha(theme.palette.grey[900], 0.6)} 0%`,
          endColor: `${alpha(theme.palette.grey[900], 0.5)} 90%`,
        }),
        borderRadius: 2,
        ml: { xs: 3, md: 15 },
        mr: { xs: 3, md: 15 },
      }}
    >
      <Container sx={{ height: 1, position: "relative" }}>
        <Typography
          variant="h3"
          component="h2"
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
          component="p"
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
            mb: 1,
          }}
        >
          <i>Contributed by</i> {author}
        </Typography>

        {filters !== undefined && filters.difficulty !== undefined && (
        <Chip
          sx={{
            color: "common.white",
            borderColor: "common.white",
            backgroundColor: "#02D87E",
            "&:hover": { backgroundColor: "#02D87E" },
            p: 1,
            mt: 1,
            py: 1.5,
            mr: 1,
          }}
          variant="filled"
          label={toTitleCase(filters.difficulty)}
          size="small"
        ></Chip>
      )}

        <Stack>
          <SpeedDial
            direction={smUp ? "left" : "up"}
            ariaLabel="Share post"
            icon={<Iconify icon="solar:share-bold" />}
            FabProps={{ size: "medium" }}
            sx={{
              position: "absolute",
              mb: { xs: "0%", md: "0%" },
              mt: { xs: "5%", md: "2%" },
              ml: { xs: "80%", md: "85%" },
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
  filters: PropTypes.object
};
