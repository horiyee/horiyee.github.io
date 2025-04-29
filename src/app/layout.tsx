import { PropsWithChildren } from "react";
import { Header } from "../components/header";

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
