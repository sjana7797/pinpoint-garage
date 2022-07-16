import { Field } from "formik";

type Props = {};

function Password({}: Props) {
  return (
    <Field
      as="input"
      name="password"
      type="password"
      id="password"
      placeholder="Password"
      className="input input-bordered input-primary border-primary/20 shadow-inner shadow-primary/20"
    />
  );
}

export default Password;
