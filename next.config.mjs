/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'imgs.search.brave.com'
			},
			{
				protocol: 'https',
				hostname: 'media.istockphoto.com'
			},
			{
				protocol: 'https',
				hostname: 'snacks-back01.onrender.com'
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080'
			},
			{
				protocol: 'http',
				hostname: 'localhost'
			}
		]
	}
};

export default nextConfig;
