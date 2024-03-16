import React from "react";
//
import { useStore } from "../zustand";
//
import { LoginPage } from "./login";
import { PrecheckPage } from "./precheck";
import { SetupPage } from "./setup";
// ----------------------------------------------------------------------

const HandlePages = () => {
  const page = useStore((state) => state.page);

  return (
    <>
      {page === "precheck" && <PrecheckPage />}
      {page === "setup" && <SetupPage />}
      {page === "login" && <LoginPage />}
    </>
  );
};

export { HandlePages };
