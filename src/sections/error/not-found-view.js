"use client";

import { m } from "framer-motion";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CompactLayout from "src/layouts/compact";
import { RouterLink } from "src/routes/components";
import { MotionContainer, varBounce } from "src/components/animate";
import Image from "src/components/image/image";

export default function NotFoundView() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Sorry, Page Not Found!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Image
            sx={{ my: 5, width: "80%", height: "80%" }}
            src="/assets/illustrations/flow/floating_balls.svg"
          />
        </m.div>

        <Button
          component={RouterLink}
          href="/"
          size="large"
          variant="contained"
        >
          Go to Home
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
