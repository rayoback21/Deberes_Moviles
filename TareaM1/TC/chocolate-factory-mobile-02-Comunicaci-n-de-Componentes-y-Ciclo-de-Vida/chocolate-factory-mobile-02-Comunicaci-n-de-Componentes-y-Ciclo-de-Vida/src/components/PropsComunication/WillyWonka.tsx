import { FC } from "react";
import { OompaLoompa } from "./OompaLoompa";
import "./WillyWonka.css";

export const WillyWonka: FC = () => {
  const orders: string = "Make more chocolates 🍫🍫!";
  
  // Función para manejar el mensaje enviado por OompaLoompa
  const handleMessage = (message: string) => {
    console.log(`Message from OompaLoompa: ${message}`);
  };

  return (
    <div className="background">
      <h1>Willy Wonka 🔊:</h1>
      {/* Pasamos la función handleMessage como prop a OompaLoompa */}
      <OompaLoompa orders={orders} sendMessage={handleMessage} />
    </div>
  );
};