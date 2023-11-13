"use client";

import ReduxProvider from "@/redux/ReduxProvider";
import { BlogCarousel } from "./BlogCarousel";

export default function BlogWrapper() {
  return (
    <ReduxProvider>
      <BlogCarousel />
    </ReduxProvider>
  );
}