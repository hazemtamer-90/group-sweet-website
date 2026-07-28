import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Group Sweet",
    short_name: "Group Sweet",
    description: "Premium Egyptian Sweets",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#670047",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}