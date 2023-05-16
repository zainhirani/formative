import { ChangeEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";

interface RegisterInputProps {
  title?: string;
  description?: string;
  price?: number;
  category?: string;
  image?: string;
}

export interface RegisterProps {
  values: RegisterInputProps;
  touched: FormikTouched<RegisterInputProps>;
  errors: FormikErrors<RegisterInputProps>;
  handleBlur: (e: ChangeEvent<any>) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  disable: boolean;
}
