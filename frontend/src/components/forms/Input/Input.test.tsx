import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@/utils/setup-utils/testUtils";
import Input from "./Input";

describe("Input", () => {
  describe("multiple variants", () => {
    describe("variant buttons", () => {
      it("should have [show password] button", () => {
        const showPwdBtn = render(<Input type="password" />).queryByRole(
          "button"
        );
        expect(showPwdBtn).toBeTruthy();
      });

      it("should have [upload file] button", () => {
        const uploadFileBtn = render(<Input type="file" />).queryByRole(
          "button"
        );
        expect(uploadFileBtn).toBeTruthy();
      });
    });

    it("should have type of [type]", () => {
      const type = "password";
      const input = render(
        <Input type={type} placeholder="input" />
      ).getByPlaceholderText("input");

      expect(input).property("type", type);
    });
  });

  describe("props", () => {
    it("should be disabled", () => {
      const input = render(
        <Input placeholder="input" disabled />
      ).getByPlaceholderText("input");

      expect(input).property("disabled", true);
    });

    it("should be required", () => {
      const requiredSpan = render(
        <Input placeholder="input" label="input" required />
      ).queryByText("*");

      expect(requiredSpan).toBeTruthy();
    });

    it("should have a label", () => {
      const label = render(
        <Input placeholder="input" label="label" />
      ).queryByText("label");

      expect(label).toBeTruthy();
    });

    it("should have error classes", () => {
      const input = render(
        <Input placeholder="input" error />
      ).getByPlaceholderText("input");

      expect(input.classList.contains("border-red-400")).toBeTruthy();
    });
  });
});
