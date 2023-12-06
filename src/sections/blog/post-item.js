import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { paths } from "../../routes/paths";
import { RouterLink } from "../../routes/components";
import { useResponsive } from "../../hooks/use-responsive";
import { fDate } from "../../utils/format-time";
import Image from "../../components/image";
import TextMaxLine from "../../components/text-max-line";
import { randomIntFromInterval } from "../../utils/random_interval";
import { Chip, Link } from "@mui/material";
import Iconify from "../../components/iconify";
import { toTitleCase } from "./view/homePageView";

export default function PostItem({
  post,
  index,
  moduleView,
  recipesInModule,
  moduleOrder,
}) {
  const mdUp = useResponsive("up", "md");

  const {
    coverUrl,
    title,
    slug,
    filters,
    totalViews,
    totalComments,
    totalShares,
    createdAt,
  } = post;

  const latestPost = index === 0 || index === 1 || index === 2;

  const linkTo = paths.recipe(slug);

  function navigatePage() {
    window.location.replace(linkTo);
  }

  if (mdUp && latestPost) {
    return (
      <Card sx={{cursor: "pointer"}} onClick={()=>navigatePage()}>
        <PostContent
          slug={slug}
          title={title}
          filters={filters}
          createdAt={createdAt}
          totalViews={totalViews}
          totalShares={totalShares}
          totalComments={totalComments}
          index={index}
          moduleView={moduleView}
          recipesInModule={recipesInModule}
          moduleOrder={moduleOrder}
        />

        <Image
          alt={title}
          src={
            coverUrl !== undefined
              ? coverUrl
              : `/assets/illustrations/flow/bg-dark${randomIntFromInterval(
                  1,
                  5,
                )}.png`
          }
          sx={{
            width: 1,
            height: 360,
          }}
        />
      </Card>
    );
  }

  return (
    <Card onClick={()=>navigatePage()}sx={{ width: "100%", cursor: "pointer" }}  >
  
      <Box sx={{ position: "relative" }}>
        <Image
          alt={title}
          src={
            coverUrl !== undefined
              ? coverUrl
              : `/assets/illustrations/flow/bg${randomIntFromInterval(
                  1,
                  8,
                )}.png`
          }
          ratio="4/3"
        />
      </Box>

      <PostContent
        slug={slug}
        title={title}
        filters={filters}
        totalViews={totalViews}
        totalComments={totalComments}
        totalShares={totalShares}
        createdAt={createdAt}
        moduleView={moduleView}
        recipesInModule={recipesInModule}
        index={index}
        moduleOrder={moduleOrder}
      />
  
    </Card>
  );
}

PostItem.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
};

export function PostContent({
  slug,
  title,
  filters,
  createdAt,
  recipesInModule,
  index,
  moduleOrder,
  moduleView,
}) {
  const mdUp = useResponsive("up", "md");

  const linkTo = paths.recipe(slug);

  const latestPostLarge = index === 0;

  const latestPostSmall = index === 1 || index === 2;

  return (
    <CardContent
      sx={{
        pt: 3,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: "absolute",
          color: "common.white",
        }),
        minHeight: 150,
      }}
    >
      <Typography
        variant="caption"
        component="div"
        sx={{
          mb: 1,
          color: "text.disabled",
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: "common.white",
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <Link color="inherit" component={RouterLink} href={linkTo}>
        <TextMaxLine
          variant={mdUp && latestPostLarge ? "h5" : "subtitle1"}
          line={2}
        >
          {title}
        </TextMaxLine>
      </Link>

      {moduleView && (
        <Chip
          sx={{
            color: "text.disabled",
            ...((latestPostLarge || latestPostSmall) && {
              opacity: 0.84,
              color: "common.white",
              borderColor: "common.white",
            }),
            p: 1,
            mt: 1,
            py: 1.5,
            mr: 1,
          }}
          icon={
            <Iconify
              color={(latestPostLarge || latestPostSmall) && "common.white"}
              icon="ph:steps-duotone"
            ></Iconify>
          }
          variant="outlined"
          label={`${moduleOrder + 1} of ${recipesInModule}`}
          size="small"
        ></Chip>
      )}

      {filters !== undefined && filters.difficulty !== undefined && (
        <Chip
          sx={{
            color: "common.white",
            borderColor: "common.white",
            backgroundColor: "#004B50",
            "&:hover": { backgroundColor: "#004B50" },
            ...((latestPostLarge || latestPostSmall) && {
              opacity: 0.84,
              color: "common.white",
              borderColor: "common.white",
              backgroundColor: "#004B50",
              "&:hover": { backgroundColor: "#004B50" },
            }),
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

      <Stack
        spacing={1.5}
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          typography: "caption",
          color: "text.disabled",
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: "common.white",
          }),
        }}
      >
        {/* <Stack direction="row" alignItems="center">
          <Iconify icon="eva:message-circle-fill" width={16} sx={{ mr: 0.5 }} />
          {fShortenNumber(totalComments)}
        </Stack> */}

        {/* <Stack direction="row" alignItems="center">
          <Iconify icon="solar:eye-bold" width={16} sx={{ mr: 0.5 }} />
          {fShortenNumber(totalViews)}
        </Stack> */}

        {/* <Stack direction="row" alignItems="center">
          <Iconify icon="solar:share-bold" width={16} sx={{ mr: 0.5 }} />
          {fShortenNumber(totalShares)}
        </Stack> */}
      </Stack>
    </CardContent>
  );
}

PostContent.propTypes = {
  //createdAt: PropTypes.date,
  filters: PropTypes.object,
  index: PropTypes.number,
  title: PropTypes.string,
  totalComments: PropTypes.number,
  totalShares: PropTypes.number,
};
