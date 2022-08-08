import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import AllProviders from "@/contexts/AllProviders";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
