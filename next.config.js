/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: (() => {
    let compilerConfig = {};
    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ["^data-testid$"] },
      };
    }
    return compilerConfig;
  })(),
};

module.exports = nextConfig;
