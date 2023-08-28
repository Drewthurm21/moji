import { type AppProps } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Component {...pageProps} />;
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
