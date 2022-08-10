import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should accept additional props", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input.hasAttribute("disabled")).toBeTruthy();
  });
});
