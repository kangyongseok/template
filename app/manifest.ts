import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "꿀모 - 세상 모든 중고 물품 꿀어모아",
		short_name: "꿀모",
		description:
			"세상의 모든 중고 물품을 모아서 비교할 수 있게 제공합니다. 꿀같은 아이템을 찾아 득템의 기회를 노릴 수 있도록 서비스를 제공함",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
