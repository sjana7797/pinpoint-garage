import { Formik, Form } from "formik";
import Email from "../../components/admin/Email";
import Password from "../../components/admin/Password";

type Props = {};

function AdminLogin({}: Props) {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="flex h-[90vh] w-full items-center justify-center">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form className="flex w-full max-w-lg flex-col space-y-5 rounded-2xl border-2 border-primary/10 p-5 shadow-md shadow-primary/5">
          <Email />
          <Password />
          <button className="btn btn-primary md:btn-sm md:w-fit md:self-end">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminLogin;
