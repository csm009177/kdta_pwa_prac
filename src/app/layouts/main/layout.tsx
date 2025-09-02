import Header from "./header";
import Left from "./left";

// "use client";

export default function MainLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Header />
  <Left />
  </>;
}
