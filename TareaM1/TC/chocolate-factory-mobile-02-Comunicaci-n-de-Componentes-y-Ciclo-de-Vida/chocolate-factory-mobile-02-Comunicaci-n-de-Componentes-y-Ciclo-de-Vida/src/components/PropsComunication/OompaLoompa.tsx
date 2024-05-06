import { FC } from "react";
import "./OompaLoompa.css";

interface OompaLoompaProps {
  orders: string;
  sendMessage: (message: string) => void;
}

export const OompaLoompa: FC<OompaLoompaProps> = ({ orders, sendMessage }) => {
  // Llama a sendMessage cuando quieras enviar un mensaje a WillyWonka
  sendMessage("Oompa Loompa is working... 👷🏻‍♀️⚒️");

  return (
    <div className="backgroundOompaLoompa">
      <h1 className="oompaLoompa">{orders}</h1>
      <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
    </div>
  );
};