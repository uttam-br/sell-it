import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder }) {
  const {
    setFieldTouched,
    setFieldValue,
    touched,
    errors,
    values,
  } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onBlue={() => setFieldTouched(name)}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors[name]} touched={touched[name]} />
    </>
  );
}

export default AppFormPicker;
