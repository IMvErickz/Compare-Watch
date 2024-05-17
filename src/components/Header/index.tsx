import { Link } from "react-router-dom";
import CompareWatchIcon from "../../assets/compareWatch.svg";
import personIcon from "../../assets/person-icon.svg";

export const Header = () => {
  return (
    <header className="w-full h-20 flex flex-row items-center justify-between shadow-3xl">
      <div className="w-full flex gap-12 h-20 items-center justify-center">
        <Link to="/" className="font-normal text-base text-green-oliver-100">
          Home
        </Link>
      </div>
      <div className="w-full flex gap-12 h-20 items-center justify-center">
        <div className="flex flex-row">
          <div>
            <img src={CompareWatchIcon} alt="Watch" />
          </div>
          <div className="flex flex-col h-14">
            <h2 className="text-[#C99029] text-3xl">CompareWatch</h2>
            <span className="text-base text-center text-green-oliver-100">
              Escolha no seu tempo.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-12 h-20 items-center justify-end">
        <Link to="/" className="font-normal text-base text-green-oliver-100">
          Sobre
        </Link>
        <div className="flex flex-row bg-green-oliver-110 h-full">
          <Link
            to="/signin"
            className="flex flex-row items-center justify-center gap-3.5 font-normal text-base text-white bg-green-oliver-110 p-6"
          >
            Entrar
            <img src={personIcon} alt="person icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};
