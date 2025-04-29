import Link from "next/link";
import { appRoutes } from "../config/routes";

export const Header: React.FC = () => {
  return (
    <header>
      <Link href={appRoutes.index}>horiyblog</Link>
    </header>
  );
};
