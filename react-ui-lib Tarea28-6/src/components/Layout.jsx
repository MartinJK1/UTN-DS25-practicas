import { Outlet } from "react-router-dom";
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import Pie from "./Pie";

export default function Layout() {
  return (
    <>
      <Encabezado />
      <Menu />
      <Outlet />
      <Pie />
    </>
  );
}