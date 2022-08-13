import React from "react";

const submitSignUp = (
  data: formDataInterface
): { error: any; response: any } => {
  console.log("submit :", data);
  return { error: null, response: {} };
};

export default submitSignUp;
