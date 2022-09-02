import React from "react";
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@/utils/setup-utils/testUtils";
import Button, { ButtonPropsInterface } from "./Button";

const MockButton: React.FC<{
  variant?: ButtonPropsInterface["variant"];
  onClick?: ButtonPropsInterface["onClick"];
}> = ({ variant, onClick }) => (
  <Button variant={variant} onClick={onClick}>
    button
  </Button>
);

describe("Button", () => {
  describe("button variants", () => {
    it("should have primary classes", () => {
      const primary = render(<MockButton variant="primary" />).getByRole(
        "button"
      );
      expect(primary.classList.contains("bg-color-primary")).toBeTruthy();
    });

    it("should have secondary classes", () => {
      const secondary = render(<MockButton variant="secondary" />).getByRole(
        "button"
      );
      expect(secondary.classList.contains("border-color-primary")).toBeTruthy();
    });

    it("should have text classes", () => {
      const text = render(<MockButton variant="text" />).getByRole("button");
      expect(text.classList.contains("hover:bg-gray-100")).toBeTruthy();
    });
  });

  describe("events", () => {
    it("should execute onClick event", () => {
      let testVar = "before";

      const button = render(
        <MockButton
          onClick={() => {
            testVar = "after";
          }}
        />
      ).getByRole("button");

      fireEvent.click(button);

      expect(testVar).toBe("after");
    });
  });

  describe("additional props", () => {
    it("should accept additional classes", () => {
      const button = render(
        <Button className="test-class">button</Button>
      ).getByRole("button");

      expect(button.classList.contains("test-class")).toBeTruthy();
    });

    it("should be disabled", () => {
      const button = render(<Button disabled>button</Button>).getByRole(
        "button"
      );

      expect(button).property("disabled", true);
    });
  });
});
