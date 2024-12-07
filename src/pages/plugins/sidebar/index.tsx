import {
	Checkbox,
	H6,
	//Divider, Input,
	Label,
} from "@controlkit/ui";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { fullPluginList, pluginListAtom } from "../store/master_list_atom";
import * as stylex from "@stylexjs/stylex";
// import Fuse from "fuse.js";

const styles = stylex.create({
	base: {
		position: "fixed",
		width: "320px",
		backgroundColor: "var(--background-100)",
		height: "100vh",
	},

	facet_block: {
		margin: "1rem",
		display: "grid",
		gap: "0.5rem",
	},

	facet_line: {
		display: "flex",
		gap: "1rem",
	},
});

const plugin_formats = ["CLAP", "VST3", "VST2", "AU", "AAX", "Standalone"];

export default function PluginsSidebar() {
	const setPluginList = useSetAtom(pluginListAtom);

	const [freeFilter, setFreeFilter] = useState(false);
	const [paidFilter, setPaidFilter] = useState(false);

	const [pluginFormatFilter, setPluginFormatFilter] = useState<string[]>([]);

	useEffect(() => {
		const ns = structuredClone(fullPluginList);

		for (let i = 0; i < ns.length; ++i) {
			// facet - paid vs free
			if (!(!freeFilter && !paidFilter)) {
				ns[i].plugins = ns[i].plugins.filter((p) => {
					if (freeFilter && paidFilter) return true;
					if (freeFilter) return p.paid.includes("FREE");
					if (paidFilter) return p.paid.includes("PAID");
				});
			}

			// facet - plugin format
			if (pluginFormatFilter.length > 0) {
				ns[i].plugins = ns[i].plugins.filter((p) => {
					return pluginFormatFilter.some((f) => {
						return p.extensions.includes(f);
					});
				});
			}
		}

		setPluginList(ns);
	});

	return (
		<div {...stylex.props(styles.base)}>
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
						<div {...stylex.props(styles.facet_block)}>
							<H6>Price</H6>

							<div {...stylex.props(styles.facet_line)}>
								<Checkbox
									checked={freeFilter}
									onCheckedChange={(e: boolean) => {
										setFreeFilter(e);
									}}
									id="free-filter-toggle"
								/>
								<Label htmlFor="free-filter-toggle">Free</Label>
							</div>

							<div {...stylex.props(styles.facet_line)}>
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
					</div>

					{/* <br /> */}

					<div>
						<div {...stylex.props(styles.facet_block)}>
							<H6>Plugin Format</H6>

							{plugin_formats.map((format) => {
								return (
									<div key={format} {...stylex.props(styles.facet_line)}>
										<Checkbox
											checked={pluginFormatFilter.includes(format)}
											onCheckedChange={(e: boolean) => {
												if (e) {
													setPluginFormatFilter([
														...pluginFormatFilter,
														format,
													]);
												} else {
													setPluginFormatFilter(
														pluginFormatFilter.filter((f) => f !== format),
													);
												}
											}}
											id={`plugin-format-${format}`}
										/>
										<Label htmlFor={`plugin-format-${format}`}>{format}</Label>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
