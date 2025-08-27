import { useState } from "react";
import api from "../../api";
import "../../style/register.css";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const register = async (e) => {
    e.preventDefault();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password !== confirmPassword) {
      setValidPassword(false);
      console.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (!regexEmail.test(email)) {
      setValidEmail(false);
      console.error("Email invalides");
      return;
    }
    try {
      const res = await api.post("/users", { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setValidEmail(true);
      setValidPassword(true);
      console.log(res.data.messages);
      navigate("/login");
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <main>
      <div className="titleRegister">
        <h2>Create an Account</h2>
        <p>Join our community of gamer</p>
      </div>
      <form onSubmit={register} noValidate>
        <fieldset>
          <div>
            <FormInput
              label="Username"
              nameInput="username"
              type="text"
              placeHolder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <FormInput
              label="Email"
              nameInput="email"
              type="email"
              placeHolder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidEmail(true);
              }}
            />
            <span>{validEmail ? "" : "Adresse e-mail valide requise"}</span>
          </div>
          <div>
            <FormInput
              label="Password"
              nameInput="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPassword(true);
              }}
            />
          </div>
          <div>
            <FormInput
              label="Confirm Password"
              nameInput="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setValidPassword(true);
              }}
            />
            <span>
              {validPassword ? "" : "Les mots de passes sont différents"}
            </span>
          </div>
        </fieldset>
        <button type="submit">SIGN UP</button>
      </form>
    </main>
  );
};

export default RegisterForm;
