import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), geolocation=(), microphone=()",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
        source: "/(.*)",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/es/index.html",
        destination: "/es",
        permanent: true,
      },
      {
        source: "/projects/opscore.html",
        destination: "/en/projects/opscore",
        permanent: true,
      },
      {
        source: "/projects/estudio-lachat.html",
        destination: "/en/projects/estudio-lachat",
        permanent: true,
      },
      {
        source: "/es/projects/opscore.html",
        destination: "/es/projects/opscore",
        permanent: true,
      },
      {
        source: "/es/projects/estudio-lachat.html",
        destination: "/es/projects/estudio-lachat",
        permanent: true,
      },
      {
        source: "/assets/cv/lucas-epherra-cv.pdf",
        destination: "/cv/lucas-epherra-cv-es.pdf",
        permanent: true,
      },
      {
        source: "/assets/cv/lucas-epherra-cv-english.pdf",
        destination: "/cv/lucas-epherra-cv-en.pdf",
        permanent: true,
      },
      {
        source: "/assets/preview/portfolio-cover.jpg",
        destination: "/images/social/portfolio-og.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
