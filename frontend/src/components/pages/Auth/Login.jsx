import { useState, useContext } from "react";
import Input from "../../form/Input";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

import styles from "../../form/Form.module.css";

/* contexts */
import { Context } from "../../../context/UserContext";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* <div className="flex items-center justify-center mb-5">
        <h1 className="text-white text-xl mr-2">Pets Adoption</h1>
        <span> <MdPets color="#fff" size={32} /></span>
      </div> */}

      <section className="bg-purple w-1/2 text-lg font-semibold  rounded-md shadow flex flex-col justify-center items-center p-4 gap-3" >
        <h1>Faça aqui o seu Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            handleOnChange={handleChange}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite a senha"
            handleOnChange={handleChange}
          />
          <input className="p-2 py-1 px-4 bg-primary rounded-md text-white mt-5 text-md" type="submit" value="Continuar" />
        </form>

        <Link to="/register">
          <input className="text-sm" type="button" value="Não possuo conta" />
        </Link>
      </section>
    </div>

  );
}

export default Login;
