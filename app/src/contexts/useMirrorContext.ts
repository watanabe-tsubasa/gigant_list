import { useContext } from "react";
import { MirrorContext } from "./MirrorContext";

export const useMirrorContext = () => {
  const context = useContext(MirrorContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }

  return context;
};
