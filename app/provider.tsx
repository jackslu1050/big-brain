"use client";

import {ClerkProvider,useAuth} from "@clerk/nextjs";
import {ConvexProviderWithClerk}
 from "convex/react-clerk"
 import { ConvexReactClient } from "convex/react";
 import { ThemeProvider } from "@/components/theme-provider";
 import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

 const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string)


export const Providers = ({children}:{children: React.ReactNode}) => {
  const { resolvedTheme } = useTheme();
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </ThemeProvider>
  )
}

// function

//  OtherProviders({ children }: { children: React.ReactNode }) {
//   const { resolvedTheme } = useTheme();

//   return (
//     <ClerkProvider
//       appearance={{
//         baseTheme: resolvedTheme === "dark" ? dark : undefined,
//       }}
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
//         {children}
//       </ConvexProviderWithClerk>
//     </ClerkProvider>
//   );
// }

