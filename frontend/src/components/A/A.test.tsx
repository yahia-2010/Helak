import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@/utils/setup-utils/testUtils";
import A from "./A";

describe("Anchor", () => {
  describe("props", () => {
    it("should be a nav link", () => {
      const anchor = render(
        <A navLink href="#">
          A
        </A>
      ).getByRole("link");

      expect(anchor.classList.contains("font-semibold"));
    });
  });

  describe("additional props", () => {
    it("should accept additional classes", () => {
      const anchor = render(
        <A className="test-class" href="#">
          A
        </A>
      ).getByRole("link");

      expect(anchor.classList.contains("test-class")).toBeTruthy();
    });
  });
});
