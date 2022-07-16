import { Field } from "formik";

type Props = {
  name: string;
  id: string;
  placeholder: string;
};

function InputFeild({ id, placeholder, name }: Props) {
  return (
    <Field
      as="input"
      type={name === "garagePhone" ? "number" : "text"}
      name={name}
      id={id}
      placeholder={placeholder}
      className="input input-bordered input-primary border-primary/30 shadow-inner shadow-primary/10"
      required
    />
  );
}

export default InputFeild;
