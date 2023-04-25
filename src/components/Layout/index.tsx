import { ReactNode } from "react";
import "./styles.scss";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
