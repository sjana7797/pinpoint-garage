import { Field } from "formik";

type Props = {};

function Email({}: Props) {
  return (
    <Field
      as="input"
      name="email"
      type="email"
      id="email"
      placeholder="Email"
      className="input input-bordered input-primary border-primary/20 shadow-inner shadow-primary/20"
    />
  );
}

export default Email;
