import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { redirect } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useFormik } from "formik";
import * as Yup from "yup";
import { firebaseApp } from "../../firebase";


const SignIn = () => {

    const [loading,setLoading] = useState(false)

    const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email address")
        .required("The email is required"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: (values) => {
        setLoading(true)
        submitForm(values)
    },
  });

  const submitForm = (values) =>{
    
    signInWithEmailAndPassword(auth,values.email,values.password).then(()=>{
      console.log("mostafa")
        redirect("/dashboard")
        setLoading(false)
    }).catch((error)=>{
      setLoading(false)
      alert(error)
    })
  }

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: "100px" }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>please login</h2>
          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error_label">{formik.errors.email}</div>
          ) : null}
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error_label">{formik.errors.password}</div>
          ) : null}
        {loading ?  <CircularProgress color='secondary' className="progress"/> : 
           <button type="submit">Log in</button>
        }
       
        </form>
      </div>
    </div>
  );
};

export default SignIn;
