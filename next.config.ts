import type { NextConfig } from "next";

const normalizedBasePath = (() => {
  const value = process.env.NEXT_BASE_PATH;
  if (!value) {
    return "";
  }

  const trimmed = value.replace(/^\/|\/$/g, "");
  if (!trimmed || trimmed === ".") {
    return "";
  }

  return `/${trimmed}`;
})();

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(normalizedBasePath
    ? {
        basePath: normalizedBasePath,
        assetPrefix: normalizedBasePath,
      }
    : {}),
};

export default nextConfig;
