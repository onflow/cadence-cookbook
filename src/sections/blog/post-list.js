import PropTypes from "prop-types";
import Grid from "@mui/material/Unstable_Grid2";
import PostItem from "./post-item";
import { PostItemSkeleton } from "./post-skeleton";
import { uniqueId } from "lodash";

export default function PostList({
  posts,
  loading,
  disabledIndex,
  moduleView,
  originalOrderOfPosts,
}) {
  const renderSkeleton = (
    <>
      {[...Array(16)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={3}>
          <PostItemSkeleton />
        </Grid>
      ))}
    </>
  );

  const renderList = (
    <>
      {posts.map((post, index) => (
        <Grid
          key={uniqueId()}
          xs={12}
          sm={6}
          md={!disabledIndex && index === 0 ? 6 : 3}
        >
          <PostItem
            moduleOrder={originalOrderOfPosts !== undefined && originalOrderOfPosts
              .map(function (e) {
                return e.slug;
              })
              .indexOf(post.slug)}
            recipesInModule={posts.length}
            moduleView={moduleView}
            post={post}
            index={!disabledIndex ? index : undefined}
          />
        </Grid>
      ))}
    </>
  );

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {loading ? renderSkeleton : renderList}
      </Grid>
    </>
  );
}

PostList.propTypes = {
  disabledIndex: PropTypes.bool,
  loading: PropTypes.bool,
  posts: PropTypes.array,
};
