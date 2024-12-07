import type { T_Plugin } from ".";

export const piano_list_meta = {
	title: "Piano",
};

export const piano_list: T_Plugin[] = [
	{
		title: "Soft Piano - Spitfire LABS",
		extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "FREE",
		brand: "Spitfire Audio",
		img: "https://images.ctfassets.net/g7eq1prqo1vw/4ng4wzlwS4NKR6YB29qxx0/7b26ee94b013b3560ac66346edbe21eb/Soft_Piano.png?fm=webp&q=80",
		homepage: "https://labs.spitfireaudio.com/packs/soft-piano",
		download: "https://labs.spitfireaudio.com/subscribe",
		notes:
			"Download the LABS vst, and through it download the free soft piano.",
	},

	{
		title: "The Giant",
		extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "PAID",
		brand: "Native Instruments",
		img: "https://www.native-instruments.com/typo3temp/pics/img-ce-intro_paragraph_facelift_the-giant-7eb3ebc71cd0171c6e0cefcf3166c05c-d.jpg",
		homepage:
			"https://www.native-instruments.com/en/products/komplete/keys/the-giant/",
		download: "https://www.native-instruments.com/en/pricing/the-giant/",
		notes: "",
	},

	{
		title: "Noire",
		extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "PAID",
		brand: "Native Instruments",
		img: "https://www.native-instruments.com/typo3temp/pics/img-ce-noire-01-intro_neu-0717422bd191d3cd3be4aba3e953becf-d.jpg",
		homepage:
			"https://www.native-instruments.com/en/products/komplete/keys/noire/",
		download: "https://www.native-instruments.com/en/pricing/noire/",
		notes: "",
	},
];
