"use client";
import { useEffect } from "react";

export default function TestComponent() {
  useEffect(() => {
    console.log("Este código solo se ejecuta en el cliente");
      }, []);

  return <div>Hola desde el cliente</div>;
}