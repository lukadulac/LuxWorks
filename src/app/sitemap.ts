import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://luxworks.business",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://luxworks.business/aboutUs",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://luxworks.business/services",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},

		{
			url: "https://luxworks.business/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];
}
