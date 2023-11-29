/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: { //this sass option import to all sass files
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "./base.scss";`,
    }
}

module.exports = nextConfig;