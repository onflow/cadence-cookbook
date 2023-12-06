"use client";

import { m } from "framer-motion";

// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CompactLayout from "src/layouts/compact";
import { RouterLink } from "src/routes/components";
import { MotionContainer, varBounce } from "src/components/animate";
import Image from "src/components/image/image";

export default function Page500() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            500 Internal Server Error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            There was an error, please try again later.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Image
            alt="Cadence Cookbook error fallback"
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
