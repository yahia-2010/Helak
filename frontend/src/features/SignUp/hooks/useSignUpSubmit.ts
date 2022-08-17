import validateEmail from "@/utils/util-functions/validateEmail";
import { useState, useEffect } from "react";
import submitSignUp from "../services/submitSignUp";
import errorConditions from "../utils/errorConditions";

const useSignUpSubmit = (fields: FormFieldInterface[]) => {
  const [dataErrors, setDataErrors] = useState<string[]>([]);
  const [reqError, setReqError] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const checkFields = () => {
    setDataErrors([]);
    if (
      fields
        .map((field) => {
          if (errorConditions(field, fields)) {
            setDataErrors((errors) => [field.name, ...errors]);
            return false;
          }
          return true;
        })
        .includes(false)
    ) {
      setIsSubmitValid(false);
      console.log("error", isSubmitValid);
      console.log(dataErrors);
    } else {
      setIsSubmitValid(true);
      console.log("success", isSubmitValid);
    }
  };

  const submit = () => {
    if (isSubmitValid) {
      const { error, res } = submitSignUp(fields);
      setReqError(error);
      setResponse(res);
      console.log("submit", fields);
    }
  };

  return { response, dataErrors, reqError, submit, checkFields };
};

export default useSignUpSubmit;
