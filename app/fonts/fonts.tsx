import localFont from "next/font/local";

export const amandine = localFont({
  src: [
    {
      path: "./amandine/Amandine_Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-amandine",
});

export const fenwick = localFont({
  src: [
    {
      path: "./fenwick/Fenwick.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-fenwick",
});
