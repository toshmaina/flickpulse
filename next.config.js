/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.nflxext.com",
				port: "",
				pathname:
					"/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/301c9da4-1628-47e9-9eb7-ead9a024147e/KE-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg",
			},
		],
	},
};

module.exports = nextConfig;
