import { FunctionComponent, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent<PropsWithChildren> = () => {
  return <Outlet />;
};

export default Layout;
