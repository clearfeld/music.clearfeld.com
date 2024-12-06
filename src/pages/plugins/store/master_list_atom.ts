import { atom } from "jotai";
import { guitar_list, guitar_list_meta } from "../lists/guitar";
import { synth_list, synth_list_meta } from "../lists/synth";

export const fullPluginList = [
	{
        meta: synth_list_meta,
		plugins: [...synth_list],
	},
	{
        meta: guitar_list_meta,
		plugins: [...guitar_list],
	},
];

export const pluginListAtom = atom(fullPluginList);
