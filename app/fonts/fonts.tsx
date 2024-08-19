import localFont from "next/font/local";

export const amandine = localFont({
  src: [
    {
      path: "./amandine/Amandine_Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./amandine/Amandine_Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./amandine/Amandine_Light.otf",
      style: "normal",
      weight: "200",
    },
  ],
});
