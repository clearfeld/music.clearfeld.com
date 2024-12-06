import {
	Checkbox,
	H6,
	//Divider, Input,
	Label,
} from "@controlkit/ui";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { fullPluginList, pluginListAtom } from "../store/master_list_atom";
// import Fuse from "fuse.js";

export default function PluginsSidebar() {
	const setPluginList = useSetAtom(pluginListAtom);

	const [freeFilter, setFreeFilter] = useState(false);
	const [paidFilter, setPaidFilter] = useState(false);

	useEffect(() => {
		const ns = structuredClone(fullPluginList);

		for (let i = 0; i < ns.length; ++i) {
			// facet paid search
			if (!(!freeFilter && !paidFilter)) {
				ns[i].plugins = ns[i].plugins.filter((p) => {
					if (freeFilter && paidFilter) return true;
					if (freeFilter) return p.paid.includes("FREE");
					if (paidFilter) return p.paid.includes("PAID");
				});
			}
		}

		setPluginList(ns);
	});

	return (
		<div
			style={{
				position: "fixed",
				width: "320px",
				backgroundColor: "var(--background-100)",
				height: "100vh",
			}}
		>
			<div>
				{/* <Input
					style={{
						margin: "1rem",
						boxSizing: "border-box",
						width: "calc(100% - 2rem)",
					}}
					placeholder="Search plugins..."
				/>

				<Divider /> */}

				<div>
					{/* Facets */}
					<div>
						<div
							style={{
								margin: "1rem",
								display: "grid",
								gap: "0.5rem",
							}}
						>
							<H6>Price</H6>

							<div
								style={{
									display: "flex",
									gap: "1rem",
								}}
							>
								<Checkbox
									checked={freeFilter}
									onCheckedChange={(e: boolean) => {
										setFreeFilter(e);
									}}
									id="free-filter-toggle"
								/>
								<Label htmlFor="free-filter-toggle">Free</Label>
							</div>

							<div
								style={{
									display: "flex",
									gap: "1rem",
								}}
							>
								<Checkbox
									checked={paidFilter}
									onCheckedChange={(e: boolean) => {
										setPaidFilter(e);
									}}
									id="paid-filter-toggle"
								/>
								<Label htmlFor="paid-filter-toggle">Paid</Label>
							</div>
						</div>
					</div>{" "}
				</div>
			</div>
		</div>
	);
}
