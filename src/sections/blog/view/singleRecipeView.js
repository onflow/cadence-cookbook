"use client";

import { CopyBlock, dracula } from "react-code-blocks";
import PropTypes from "prop-types";
import {
  Chip,
  Stack,
  Divider,
  Container,
  Typography,
  Box,
  Button,
  LinearProgress,
} from "@mui/material";
import Markdown from "src/components/markdown";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import PostList from "../post-list";
import PostDetailsHero from "../post-details-hero";
import { PostDetailsSkeleton } from "../post-skeleton";
import { paths } from "src/routes/paths";
import { useRouter } from "next/navigation";

export default function SingleRecipeView({
  recipe,
  relatedRecipes,
  nextRecipeTitle,
  nextRecipeSlug,
  previousRecipeSlug,
}) {
  const latestPosts = relatedRecipes;
  const post = recipe;

  const { push } = useRouter();

  const renderSkeleton = <PostDetailsSkeleton />;

  // const renderError = (
  //   <Container sx={{ my: 10 }}>
  //     <EmptyContent
  //       filled
  //       title={`${postError?.message}`}
  //       action={
  //         <Button
  //           component={RouterLink}
  //           href={paths.post.root}
  //           startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
  //           sx={{ mt: 3 }}
  //         >
  //           Back to List
  //         </Button>
  //       }
  //       sx={{ py: 10 }}
  //     />
  //   </Container>
  // );

  const renderPost = post && (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{ ml: { xs: "5%", md: "9%" }, mb: "1%", mt: "2%", pt: { xs: 2 } }}
      >
        {post.title}
      </Typography>
      <CustomBreadcrumbs
        links={[
          {
            name: "Recipes",
            href: "/",
          },
          {
            name: post?.module,
            href: "/",
          },
          {
            name: post?.title,
          },
        ]}
        sx={{ ml: { xs: "5%", md: "9%" }, mb: "2%", pb: { xs: 2 } }}
      />
      <PostDetailsHero
        title={
          post.featuredText !== null &&
          post.featuredText !== undefined &&
          post.featuredText !== ""
            ? post.featuredText
            : post.title
        }
        author={post.author}
        coverUrl={post.coverUrl}
        createdAt={post.createdAt}
        playgroundLink={post.playgroundLink}
      />

      <Container
        maxWidth={false}
        sx={{
          py: 3,
          mb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      />

      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 920, mx: "auto", pl: { xs: 2 }, pr: { xs: 2 } }}>
          {post.excerpt !== undefined && post.excerpt !== null && (
            <Typography variant="subtitle1" sx={{ mb: 5 }}>
              {post.excerpt}
            </Typography>
          )}

          <Typography variant="h5" sx={{ mb: 5 }}>
            Smart Contract Example
          </Typography>
        </Stack>

        {post.smartContractCode !== undefined &&
          post.smartContractCode !== null && (
            <Box
              pl={{ md: 30, xs: 2 }}
              pr={{ md: 30, xs: 2 }}
              alignItems="center"
            >
              <CopyBlock
                text={post.smartContractCode}
                language="swift"
                showLineNumbers
                theme={dracula}
                wrapLines
              />
            </Box>
          )}

        <Stack sx={{ maxWidth: 920, mx: "auto", pl: { xs: 2 }, pr: { xs: 2 } }}>
          {/* <Alert sx={{ mt: 5, mb: 5 }} severity="success">
            Sample info blurb
          </Alert> */}

          {post.smartContractExplanation !== undefined &&
            post.smartContractExplanation !== null && (
              <Markdown
                sx={{ mt: 5, mb: 5 }}
                children={post.smartContractExplanation}
              />
            )}

          <Typography variant="h5" sx={{ mt: 5, mb: 5 }}>
            Transaction Example
          </Typography>
        </Stack>

        {post.transactionCode !== undefined &&
          post.transactionCode !== null && (
            <Box
              pl={{ md: 30, xs: 2 }}
              pr={{ md: 30, xs: 2 }}
              alignItems="center"
            >
              <CopyBlock
                text={post.transactionCode}
                language="swift"
                showLineNumbers
                theme={dracula}
                wrapLines
              />
            </Box>
          )}

        <Stack sx={{ maxWidth: 920, mx: "auto", pl: { xs: 2 }, pr: { xs: 2 } }}>
          {/* <Alert sx={{ mt: 5 }} severity="info">
            Sample info blurb
          </Alert> */}

          {post.transactionExplanation !== undefined &&
            post.transactionExplanation !== null && (
              <Markdown
                sx={{ mt: 5, mb: 5 }}
                children={post.transactionExplanation}
              />
            )}

          {((post.testCasesCode !== undefined && post.testCasesCode !== null) ||
            (post.testCasesExplanation !== undefined &&
              post.testCasesExplanation !== null)) && (
            <Typography variant="h5" sx={{ mb: 5 }}>
              Cadence Test Cases
            </Typography>
          )}
        </Stack>

        {post.testCasesCode !== undefined && post.testCasesCode !== null && (
          <Box
            pl={{ md: 30, xs: 2 }}
            pr={{ md: 30, xs: 2 }}
            alignItems="center"
          >
            <CopyBlock
              text={post.testCasesCode}
              language="swift"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
          </Box>
        )}

        <Stack sx={{ maxWidth: 920, mx: "auto", pl: { xs: 2 }, pr: { xs: 2 } }}>
          {post.testCasesExplanation !== undefined &&
            post.testCasesExplanation !== null && (
              <Markdown
                sx={{ mt: 5, mb: 5 }}
                children={post.testCasesExplanation}
              />
            )}

          {/* <Typography variant="h5" sx={{ mb: 3 }}>
            FAQs
          </Typography>

          <Stack sx={{ mb: 5 }}>
            <FaqsList />
          </Stack> */}

          <Divider />

          <Stack direction="row" sx={{ mt: 5 }}>
            <Typography
              variant="overline"
              sx={{ mb: 3, color: "text.secondary" }}
            >
              Progress
            </Typography>
            <Typography variant="overline" sx={{ mb: 3, ml: 3 }}>
              {post.module}
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ mb: 5 }}>
            <Stack>
              {nextRecipeTitle !== null && (
                <Typography variant="body2" sx={{ mb: 3 }}>
                  <strong>Up Next:</strong> {nextRecipeTitle}
                </Typography>
              )}
              <LinearProgressWithLabel value={90} />
            </Stack>

            <Box sx={{ flexGrow: 1 }} />
            {previousRecipeSlug !== null && (
              <Button
                onClick={() => push(paths.recipe(previousRecipeSlug))}
                sx={{ mr: 1, backgroundColor: "text.secondary" }}
                variant="contained"
              >
                Previous Lesson
              </Button>
            )}
            {nextRecipeSlug !== null && (
              <Button
                onClick={() => push(paths.recipe(nextRecipeSlug))}
                sx={{ backgroundColor: "#08ec8c" }}
                variant="contained"
              >
                Continue
              </Button>
            )}
          </Stack>

          {/* <Stack direction="row" flexWrap="wrap" sx={{ mb: 4 }} spacing={1}>
            {post.tags !== undefined &&
              post.tags !== null &&
              post.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="soft" />
              ))}
          </Stack> */}

          <Divider />

          {/* <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  color="error"
                  icon={<Iconify icon="solar:heart-bold" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" />}
                />
              }
              label={fShortenNumber(post.totalFavorites)}
              sx={{ mr: 1 }}
            />

            <AvatarGroup>
              {post.favoritePerson.map((person) => (
                <Avatar
                  key={person.name}
                  alt={person.name}
                  src={person.avatarUrl}
                />
              ))}
            </AvatarGroup>
          </Stack> */}

          {/* <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
            <Typography variant="h4">Comments</Typography>

            <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
              ({post.comments.length})
            </Typography>
          </Stack>

          <PostCommentForm />

          <Divider sx={{ mt: 5, mb: 2 }} />

          <PostCommentList comments={post.comments} /> */}
        </Stack>
      </Container>
    </>
  );

  const renderLatestPosts = (
    <Stack sx={{ pl: { xs: 2 }, pr: { xs: 2 } }}>
      <Typography variant="h4" sx={{ mt: 5, mb: 5 }}>
        Related Recipes
      </Typography>

      <PostList posts={latestPosts.slice(0, 4)} loading={false} disabledIndex />
    </Stack>
  );

  return (
    <>
      {/* {postLoading && renderSkeleton} */}

      {/* {postError && renderError} */}

      {post && renderPost}

      <Container sx={{ pb: 15 }}>
        {!!latestPosts.length && renderLatestPosts}
      </Container>
    </>
  );
}

SingleRecipeView.propTypes = {
  recipe: PropTypes.object,
  relatedRecipes: PropTypes.array,
};

function LinearProgressWithLabel(value) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
