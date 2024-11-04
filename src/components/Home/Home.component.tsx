import { Link } from 'react-router-dom';
import logo from './zod.svg';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-2">
      <div className="mt-2">
        <div className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg mt-5">
          <h1 className="text-2xl font-bold">Home</h1>
          <p>Bem-vindo ao workshop de Zod!</p>
          <p>
            Neste workshop, você vai aprender como usar o Zod para validar
            formulários em React.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg mt-3 grid grid-cols-2">
          <Link to="/basic">Basic Form</Link>
          <Link to="/email">Email Form</Link>
          <Link to="/password">Password Form</Link>
          <Link to="/age">Age Form</Link>
          <Link to="/gender">Gender Form</Link>
          <Link to="/agreement">Agreement Form</Link>
        </div>
      </div>
      <div className="max-w-lg place-self-center w-full">
        <img src={logo} alt="Codante" />
      </div>
    </div>
  );
}
