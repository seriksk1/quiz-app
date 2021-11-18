import React from "react";
import { Field } from "./types";

export interface FormProps {
  onSubmit: (data: any) => void;
  fields: Field[];
  name: string;
  schema: any;
  defaultValues: any;
  helperText: string;
  helperPath: string;
  View: React.FC<any>;
}
