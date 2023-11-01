"use client";

import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import isEqual from "lodash/isEqual";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { POST_SORT_OPTIONS, _mock } from "../../../_mock";
import { useSettingsContext } from "../../../components/settings";
import CarouselAnimation from "../../../sections/_examples/extra/carousel-view/carousel-animation";
import PostList from "../post-list";
import PostSort from "../post-sort";
import RecipeFilters from "../recipe-filters";
import { useBoolean } from "../../../hooks/use-boolean";

export const defaultFilters = {
  difficulty: [],
};

export const DIFFICULTY_OPTIONS = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

export default function HomePageView({ recipes, featuredRecipes }) {
  const settings = useSettingsContext();
  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState("latest");

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const canReset = !isEqual(defaultFilters, filters);

  const dataFiltered = applyFilter({
    inputData: recipes,
    sortBy,
    filters,
  });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <Container sx={{ mt: 15 }} maxWidth={settings.themeStretch ? false : "lg"}>
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
        <Stack direction="row">
          <RecipeFilters
            open={openFilters.value}
            onOpen={openFilters.onTrue}
            onClose={openFilters.onFalse}
            filters={filters}
            onFilters={handleFilters}
            canReset={canReset}
            onResetFilters={handleResetFilters}
            difficultyOptions={DIFFICULTY_OPTIONS}
          />
          <PostSort
            sort={sortBy}
            onSort={handleSortBy}
            sortOptions={POST_SORT_OPTIONS}
          />
        </Stack>
      </Stack>

      <PostList posts={dataFiltered} loading={false} />
    </Container>
  );
}

HomePageView.propTypes = {
  recipes: PropTypes.array,
};

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const applyFilter = ({ inputData, sortBy, filters }) => {
  const { difficulty } = filters;

  if (difficulty.length) {
    inputData = inputData.filter(
      (product) =>
        product.filters !== undefined &&
        difficulty.includes(toTitleCase(product.filters.difficulty))
    );
  }

  if (sortBy === "latest") {
    return orderBy(inputData, ["createdAt"], ["desc"]);
  }

  if (sortBy === "oldest") {
    return orderBy(inputData, ["createdAt"], ["asc"]);
  }

  return inputData;
};
