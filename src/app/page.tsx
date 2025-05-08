import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Pixelify",
});

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

// <h1
//   className={`${pixelify.className} font-semibold text-4xl select-none`}
// >
//   Pixerly
// </h1>
