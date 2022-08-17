import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [occup, setOccup] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    validation();
    console.log(
      fname,
      lname,
      email,
      phone,
      add,
      bdate,
      gender,
      occup,
      pass,
      cpass
    );
    if (pass == cpass) {
      const userObj = {
        fname,
        lname,
        email,
        phone,
        add,
        bdate,
        gender,
        occup,
        pass,
        cpass,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/auth/register",
          userObj
        );
        if (response.data.success == true) {
          toast.success(response.data.message);
          setFname("");
          setLname("");
          setEmail("");
          setPhone("");
          setAdd("");
          setBdate("");
          setOccup("");
          setPass("");
          setCpass("");
          window.location.reload()
        } else {
          toast.warn(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Password Does not match");
    }
  };

  const validation = () => {
    if (!fname) {
      toast.error("Please input First Name");
    }
    if (!lname) {
      toast.error("Please input Last Name");
    }
    if (!email) {
      toast.error("Please input Email");
    }
    if (!bdate) {
      toast.error("Please input Birth");
    }
    if (!pass) {
      toast.error("Please input Password");
    }

    if (pass.length < 4) {
      toast.error("Password length should be greater that 4 charector");
    }
  };

  const clearData = () => {
    window.location.reload()
  };

  return (
    <div className="container">
      <form className="registerForm" onSubmit={submitData}>
        <h3>Register User Details</h3>
        <div className="div">
          <label>First Name</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setFname(e.target.value);
            }}
          ></input>
        </div>
        <div className="div">
          <label>Last Name</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setLname(e.target.value);
            }}
          ></input>
        </div>
        <div className="div">
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="div">
          <label>Phone number</label>
          <input
            type="number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <div className="div">
          <label>Address</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setAdd(e.target.value);
            }}
          ></input>
        </div>
        <div className="div">
          <label>Birth Date</label>
          <input
            type={"date"}
            required
            onChange={(e) => {
              setBdate(e.target.value);
            }}
          ></input>
        </div>

        <div className="div">
          <label>First Name</label>
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="N/A">N/A</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="div">
          <label>Occupation</label>
          <input
            type="text"
            onChange={(e) => {
              setOccup(e.target.value);
            }}
            required
          ></input>
        </div>

        <div className="div">
          <label>Password</label>
          <input
            type="password"
            required
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </div>

        <div className="div">
          <label>Confirm password</label>
          <input
            type="password"
            required
            onChange={(e) => {
              setCpass(e.target.value);
            }}
          ></input>
        </div>

        <div className="btn-div">
          <Button
            variant="primary"
            type="submit"
            id="btnSubmit"
            className="btn"
            onClick={submitData}
          >
            Submit
          </Button>

          <Button variant="secondary" className="btn" onClick={clearData}>
            Clear Form
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
