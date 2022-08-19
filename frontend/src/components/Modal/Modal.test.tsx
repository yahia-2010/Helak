import React from "react";
import Modal, { ModalPropsInterface } from "./Modal";
import { render, screen } from "@/utils/setup-utils/testUtils";
import { describe, it, expect } from "vitest";

describe("Modal", () => {
  it("should open", () => {
    render(<Modal isOpen={true} />);
  });
});
