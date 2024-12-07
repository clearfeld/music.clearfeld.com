import { atom } from "jotai";
import { guitar_list, guitar_list_meta } from "../lists/guitar";
import { synth_list, synth_list_meta } from "../lists/synth";
import { reverbs_list, reverbs_list_meta } from "../lists/reverbs";
import { vocoder_list, vocoder_list_meta } from "../lists/vocoder";
import { transient_shaper_list, transient_shaper_list_meta } from "../lists/transient_shaper";
import { eq_list, eq_list_meta } from "../lists/eq";
import { bitcrusher_list, bitcrusher_list_meta } from "../lists/bitcrusher";
import { chorus_list, chorus_list_meta } from "../lists/chorus";
import { delay_list, delay_list_meta } from "../lists/delay";
import { piano_list, piano_list_meta } from "../lists/piano";

export const fullPluginList = [
	{
        meta: synth_list_meta,
		plugins: [...synth_list],
	},

	{
        meta: piano_list_meta,
		plugins: [...piano_list],
	},

	{
        meta: guitar_list_meta,
		plugins: [...guitar_list],
	},

	{
        meta: reverbs_list_meta,
		plugins: [...reverbs_list],
	},

	{
        meta: vocoder_list_meta,
		plugins: [...vocoder_list],
	},

	{
        meta: transient_shaper_list_meta,
		plugins: [...transient_shaper_list],
	},

	{
        meta: eq_list_meta,
		plugins: [...eq_list],
	},

	{
        meta: bitcrusher_list_meta,
		plugins: [...bitcrusher_list],
	},

	{
        meta: chorus_list_meta,
		plugins: [...chorus_list],
	},

	{
        meta: delay_list_meta,
		plugins: [...delay_list],
	},
];

export const pluginListAtom = atom(fullPluginList);
