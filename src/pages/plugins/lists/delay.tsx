import type { T_Plugin } from ".";

export const delay_list_meta = {
	title: "Delay",
};

export const delay_list: T_Plugin[] = [
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
		title: "EchoBoy",
		extensions: ["VST3", "VST2", "AU", "AAX"],
		paid: "PAID",
		brand: "Soundtoys",
		img: "https://www.soundtoys.com/wp-content/uploads/2015/06/echoboy.png",
		homepage: "https://www.soundtoys.com/product/echoboy/",
		download: "https://www.soundtoys.com/product/echoboy/",
		notes: "",
	},

	{
		title: "Valhalla Freq Echo",
		extensions: ["VST3", "VST2", "AAX"],
		paid: "FREE",
		brand: "Valhalla DSP",
		img: "https://val-media-offload.s3.amazonaws.com/wp-content/uploads/2014/06/08073911/ValhallaFreqEcho-1-960x413.jpg.webp",
		homepage: "https://valhalladsp.com/shop/delay/valhalla-freq-echo/",
		download: "https://valhalladsp.com/demos-downloads/",
		notes: "",
	},
];
