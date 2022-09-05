import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@/utils/setup-utils/testUtils";
import Tabs from "./Tabs";

const TabsMock: React.FC = () => (
  <Tabs tabs={["tab1", "tab2"]} panels={["panel1", "panel2"]} />
);

describe("Tabs", () => {
  it("should show first panel", () => {
    render(<TabsMock />);
    const panel1 = screen.queryByText("panel1");
    expect(panel1).toBeTruthy();
  });

  it("should change panels", () => {
    render(<TabsMock />);
    const tab2 = screen.getByText("tab2");
    fireEvent.click(tab2);
    const panel2 = screen.queryByText("panel2");
    expect(panel2).toBeTruthy();
  });
});
