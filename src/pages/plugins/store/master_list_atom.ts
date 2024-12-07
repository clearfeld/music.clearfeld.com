import { atom } from "jotai";
import { guitar_list, guitar_list_meta } from "../lists/guitar";
import { synth_list, synth_list_meta } from "../lists/synth";
import { reverbs_list, reverbs_list_meta } from "../lists/reverbs";

export const fullPluginList = [
	{
        meta: synth_list_meta,
		plugins: [...synth_list],
	},
	{
        meta: guitar_list_meta,
		plugins: [...guitar_list],
	},

	{
        meta: reverbs_list_meta,
		plugins: [...reverbs_list],
	},
];

export const pluginListAtom = atom(fullPluginList);
