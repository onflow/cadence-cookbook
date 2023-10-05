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
  Alert,
} from "@mui/material";
import Markdown from "src/components/markdown";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import FaqsList from "src/sections/faqs/faqs-list";
import PostList from "../post-list";
import PostCommentList from "../post-comment-list";
import PostCommentForm from "../post-comment-form";
import PostDetailsHero from "../post-details-hero";
import { PostDetailsSkeleton } from "../post-skeleton";

export default function SingleRecipeView({ recipe, relatedRecipes }) {
  // const { post, postError, postLoading } = useGetPost(title);

  // const { latestPosts, latestPostsLoading } = useGetLatestPosts(title);

  const latestPosts = relatedRecipes;
  const post = recipe;

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
        sx={{ ml: "9%", mb: "1%", mt: "2%" }}
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
            name: "NFT Storefront Essentials",
            href: "/",
          },
          {
            name: post?.title,
          },
        ]}
        sx={{ maxWidth: 720, ml: "9%", mb: "2%" }}
      />
      <PostDetailsHero
        title={post.description}
        author={post.author}
        coverUrl={post.coverUrl}
        createdAt={post.createdAt}
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
        <Stack sx={{ maxWidth: 920, mx: "auto" }}>
          <Typography variant="subtitle1" sx={{ mb: 5 }}>
            {post.excerpt}
          </Typography>

          <Typography variant="h5" sx={{ mb: 5 }}>
            Smart Contract Example
          </Typography>
        </Stack>

        <Box pl={30} pr={30} alignItems="center">
          <CopyBlock
            text={post.smartContractCode}
            language="swift"
            showLineNumbers
            theme={dracula}
            wrapLines
          />
        </Box>

        <Stack sx={{ maxWidth: 920, mx: "auto" }}>
          <Alert sx={{ mt: 5 }} severity="success">
            Sample info blurb
          </Alert>

          <Markdown
            sx={{ mt: 5, mb: 5 }}
            children={post.smartContractExplanation}
          />

          <Typography variant="h5" sx={{ mb: 5 }}>
            Transaction Example
          </Typography>
        </Stack>

        <Box pl={30} pr={30} alignItems="center">
          <CopyBlock
            text={post.transactionCode}
            language="swift"
            showLineNumbers
            theme={dracula}
            wrapLines
          />
        </Box>

        <Stack sx={{ maxWidth: 920, mx: "auto" }}>
          <Alert sx={{ mt: 5 }} severity="info">Sample info blurb</Alert>

          <Markdown
            sx={{ mt: 5, mb: 5 }}
            children={post.transactionExplanation}
          />

          <Typography variant="h5" sx={{ mb: 5 }}>
            Cadence Test Cases
          </Typography>
        </Stack>

        <Box pl={30} pr={30} alignItems="center">
          <CopyBlock
            text={post.testCasesCode}
            language="swift"
            showLineNumbers
            theme={dracula}
            wrapLines
          />
        </Box>

        <Stack sx={{ maxWidth: 920, mx: "auto" }}>
          <Markdown sx={{ mt: 5, mb: 5 }} children={post.testCasesExplanation} />

          <Typography variant="h5" sx={{ mb: 3 }}>
            FAQs
          </Typography>

          <Stack sx={{ mb: 5 }}>
            <FaqsList />
          </Stack>

          <Stack direction="row">
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

          <Stack direction="row" sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 3 }}>
              <strong>Up Next:</strong> Handling Marketplace Purchases
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              sx={{ mr: 1, backgroundColor: "text.secondary" }}
              variant="contained"
            >
              Previous Lesson
            </Button>
            <Button sx={{ backgroundColor: "#08ec8c" }} variant="contained">
              Continue
            </Button>
          </Stack>

          <Stack direction="row" flexWrap="wrap" sx={{ mb: 4 }} spacing={1}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="soft" />
            ))}
          </Stack>

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

          <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
            <Typography variant="h4">Comments</Typography>

            <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
              ({post.comments.length})
            </Typography>
          </Stack>

          <PostCommentForm />

          <Divider sx={{ mt: 5, mb: 2 }} />

          <PostCommentList comments={post.comments} />
        </Stack>
      </Container>
    </>
  );

  const renderLatestPosts = (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Related Recipes
      </Typography>

      <PostList
        posts={latestPosts.slice(latestPosts.length - 4)}
        loading={false}
        disabledIndex
      />
    </>
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
