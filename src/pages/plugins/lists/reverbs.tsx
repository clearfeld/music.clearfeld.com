import type { T_Plugin } from ".";

export const reverbs_list_meta = {
	title: "Reverbs",
};

export const reverbs_list: T_Plugin[] = [
	{
		title: "Valhalla Super Massive",
		extensions: ["VST3", "VST2", "AAX"],
		paid: "FREE",
		brand: "Valhalla DSP",
		img: "https://val-media-offload.s3.amazonaws.com/wp-content/uploads/2020/05/08073902/Supermassive-GUI-960x509.jpg.webp",
		homepage: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/",
		download: "https://valhalladsp.com/demos-downloads/",
		notes: "",
	},

	{
		title: "Raum",
		extensions: ["VST3", "VST2", "AAX"],
		paid: "FREE",
		brand: "Native Instruments",
		img: "https://www.native-instruments.com/typo3temp/pics/img-ce-raum-product-page-02-intro-6922f2403f318a9efe328656d5857bd8-d.jpg",
		homepage:
			"https://www.native-instruments.com/en/products/komplete/effects/raum/",
		download:
			"https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/get-komplete-start/",
		notes: "",
	},

	{
		title: "Neoverb",
		extensions: ["VST3", "VST2", "AU", "AAX"],
        // x64 bit only
        // TODO: should probably include OS arch and DAW compatibility for plugins
		paid: "PAID",
		brand: "Izotope | Native Instruments",
		img: "https://www.izotope.com/storage-cms/images/_aliases/image_full_1920w_1x/9/6/8/9/979869-1-eng-GB/7f27a3b6146a-izotope-pdp-neoverb.jpg.webp",
		homepage: "https://www.izotope.com/en/products/neoverb.html",
		download: "https://www.izotope.com/en/shop/neoverb/",
		notes: "",
	},

	{
		title: "Spacer",
		extensions: ["VST3", "VST2", "AAX"],
		paid: "FREE",
		brand: "Spectral Plugins",
		img: "https://spectral-plugins.com/cdn/shop/products/spaceruinbg_0aff0754-6b81-4eb6-b225-cc1c1c5422dc.webp?v=1666178871",
		homepage: "https://spectral-plugins.com/",
		download: "https://spectral-plugins.com/",
		notes: "",
	},

	{
		title: "Solaris",
		extensions: ["VST3", "VST2"],
		paid: "FREE",
		brand: "Adam Szabo",
		img: "https://www.adamszabo.com/wordpress/wp-content/uploads/2023/07/solaris_gui.png",
		homepage: "https://www.adamszabo.com/vstplugins/solaris/",
		download: "https://www.kvraudio.com/product/solaris-by-adam-szabo/downloads",
		notes: "",
	},

	{
		title: "Valhalla VintageVerb",
		extensions: ["VST3", "VST2", "AAX"],
		paid: "PAID",
		brand: "Valhalla DSP",
		img: "https://val-media-offload.s3.amazonaws.com/wp-content/uploads/2014/11/08074320/ValhallaVintageVerb70sGUI.jpg.webp",
		homepage: "https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/",
		download: "https://valhalladsp.com/demos-downloads/",
		notes: "",
	},

	{
		title: "SuperPlate",
        extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "PAID",
		brand: "Soundtoys",
		img: "https://www.soundtoys.com/wp-content/uploads/SuperPlate__Wood-Surround-Photoshopped__June-8-2023.png",
		homepage: "https://www.soundtoys.com/product/superplate/",
		download: "https://www.soundtoys.com/product/superplate/",
		notes: "",
	},

	{
		title: "Aurora",
        extensions: ["VST3", "AU", "AAX"],
		paid: "PAID",
		brand: "Izotope | Native Instruments",
		img: "https://www.izotope.com/storage-cms/images/_aliases/text_image_large_above_1920w_1x/2/0/4/6/1706402-7-eng-GB/8934d99b4b3a-Aurora-overview-ui.png.webp",
		homepage: "https://www.izotope.com/en/products/aurora.html",
		download: "https://www.izotope.com/en/shop/aurora/",
		notes: "",
	},

	{
		title: "Smart:reverb",
        extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "PAID",
		brand: "Sonible",
		img: "https://www.sonible.com/wp-content/uploads/2020/07/smRev_buy-now.jpg",
		homepage: "https://www.sonible.com/smartreverb/",
		download: "https://www.sonible.com/smartreverb/",
		notes: "",
	},
];
