import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login", { email, password });
      console.log(res.data);
      setEmail("");
      setPassword("");
      navigate("/protected");
    } catch (err) {
      console.error("Error: ", err);
      return;
    }
  };

  return (
    <>
      <div>
        <h2>Log In</h2>
        <p>Log in with your account</p>
      </div>
      <form action={register}>
        <fieldset>
          <div>
            <FormInput
              label="Email"
              nameInput="email"
              type="email"
              placeHolder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <FormInput
              label="Password"
              nameInput="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </fieldset>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LogInForm;
