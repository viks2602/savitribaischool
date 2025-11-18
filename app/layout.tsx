import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Root layout - minimal wrapper
export default function RootLayout({ children }: Props) {
  return children;
}
