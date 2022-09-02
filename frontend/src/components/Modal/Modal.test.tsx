import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@/utils/setup-utils/testUtils";
import Modal from "./Modal";

describe("Modal", () => {
  it("should be visible", () => {
    const modal = render(<Modal isOpen={true} />).queryByTestId("modal");
    expect(modal).toBeTruthy();
  });

  it("should be invisible", () => {
    const modal = render(<Modal isOpen={false} />).queryByText("modal");
    expect(modal).toBeFalsy();
  });
});
