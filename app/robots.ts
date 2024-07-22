import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/me/*",
				"/alarm/*",
				"/setting/*",
				"/oauth",
				"/bridge",
				"/region/setting",
			],
		},
		sitemap: "https://ggulmo.com/sitemap.xml",
	};
}
