import { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
