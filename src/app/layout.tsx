import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stellaris Observatory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
