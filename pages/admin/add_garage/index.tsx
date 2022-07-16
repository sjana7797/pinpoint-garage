import { Form, Formik } from "formik";
import InputFeild from "../../../components/admin/Garages/InputFeild";
import { GarageUploadData } from "../../../typing";
import { apiAxios } from "../../../utils/apiAxios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

type Props = {};

function AddGarages({}: Props) {
  const initialValues: GarageUploadData = {
    garageName: "",
    garageAddress: "",
    garageImage: "",
    garagePhone: 0,
    garageTime: "",
  };
  const feilds = [
    { name: "garageName", placeholder: "Garage Name" },
    { name: "garageAddress", placeholder: "Garage Address" },
    { name: "garageImage", placeholder: "Garage Image" },
    { name: "garagePhone", placeholder: "Garage Phone" },
    { name: "garageTime", placeholder: "Garage Time" },
  ];
  const handleGarageUpload = async (
    name: string,
    address: string,
    phone: number,
    image: string,
    time: string
  ) => {
    apiAxios.post("garages/add", {
      name,
      address,
      phone,
      image,
      time,
    });
  };
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-center pt-14">
      <Formik
        initialValues={initialValues}
        onSubmit={(values: GarageUploadData, { setSubmitting, resetForm }) => {
          toast.promise(
            handleGarageUpload(
              values.garageName,
              values.garageAddress,
              values.garagePhone,
              values.garageImage,
              values.garageTime
            ),
            {
              pending: "Garage Data uploading...",
              success: "Garage Data uploaded successfully 👌",
              error: "Upload failed",
            }
          );
          setSubmitting(false);
          resetForm({ values: initialValues });
        }}
      >
        <Form className="form-control mx-auto flex w-full max-w-md flex-col space-y-4 rounded-2xl border-2 border-primary/10 p-5 shadow-md shadow-primary/20">
          {feilds.map((feild) => (
            <InputFeild
              name={feild.name}
              id={feild.name}
              placeholder={feild.placeholder}
              key={feild.name}
            />
          ))}
          <button type="submit" className="btn btn-primary">
            add garage
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddGarages;
