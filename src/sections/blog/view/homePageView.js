"use client";

import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { POST_SORT_OPTIONS, _mock } from "src/_mock";
import { useSettingsContext } from "src/components/settings";
import CarouselAnimation from "src/sections/_examples/extra/carousel-view/carousel-animation";
import PostList from "../post-list";
import PostSort from "../post-sort";

export default function HomePageView({ recipes, featuredRecipes }) {
  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState("latest");

  const dataFiltered = applyFilter({
    inputData: recipes,
    sortBy,
  });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  return (
    <Container sx={{mt: 15}} maxWidth={settings.themeStretch ? false : "lg"}>
      <CarouselAnimation data={featuredRecipes} />

      <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: "flex-end", sm: "center" }}
        direction={{ xs: "row", sm: "row" }}
      >
        <Typography
        variant="h4"
        sx={{
          my: { xs: 3, md: 5 },
        }}
      >
        Recipes
      </Typography>
        <PostSort
          sort={sortBy}
          onSort={handleSortBy}
          sortOptions={POST_SORT_OPTIONS}
        />
      </Stack>

      <PostList posts={dataFiltered} loading={false} />
    </Container>
  );
}

HomePageView.propTypes = {
  recipes: PropTypes.array,
};

const applyFilter = ({ inputData, sortBy }) => {
  if (sortBy === "latest") {
    return orderBy(inputData, ["createdAt"], ["desc"]);
  }

  if (sortBy === "oldest") {
    return orderBy(inputData, ["createdAt"], ["asc"]);
  }

  return inputData;
};
