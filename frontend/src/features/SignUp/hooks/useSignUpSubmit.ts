import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import errorConditions from "../utils/errorConditions";
import submitSignUp from "../services/submitSignUp";

const useSignUpSubmit = (fields: FormFieldInterface[]) => {
  const { setAuthValues } = useContext(AuthContext);
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
    } else {
      setIsSubmitValid(true);
    }
  };

  const submit = () => {
    if (isSubmitValid) {
      const { res, err } = submitSignUp(fields, setAuthValues);
      setReqError(err);
      setResponse(res);
    }
  };

  return { response, dataErrors, reqError, submit, checkFields };
};

export default useSignUpSubmit;
