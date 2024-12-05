import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Lozenge,
	Link,
	H2,
} from "@controlkit/ui";
import { guitar } from "./lists/guitar";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import type { T_Plugin } from "./lists";

const styles = stylex.create({
	base: {
		paddingTop: "2rem",
        paddingBottom: "2rem",
		maxWidth: "1366px",
		margin: "0 auto",
	},

	cell_outline: {
		outline: "1px solid var(--border-100)",
		padding: "0.75rem 1rem",
	},

	content_base: {
		display: "grid",
		alignContent: "center",
		background: "var(--background-100)",
		maxWidth: "100%",
	},

	img: {
		objectFit: "cover",
		width: "100%",
		height: "100%",
		borderRadius: "0.5rem",
	},

	textOverflow: {
		textWrap: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
});

export default function Plugins() {
	return (
		<div {...stylex.props(styles.base)}>
			<div
				style={{
					padding: "0 1rem",
				}}
			>
				<H2>Guitars</H2>

				<br />

				{guitar.map((plugin: T_Plugin) => {
					return <PluginRow key={plugin.title} plugin={plugin} />;
				})}
			</div>
		</div>
	);
}

type PluginRowProps = {
	key: string;
	plugin: T_Plugin;
};

function PluginRow({ plugin }: PluginRowProps) {
	const [open, setOpen] = useState(false);

	function OnOpenChange(open_arg: boolean) {
		setOpen(open_arg);
	}

	return (
		<Collapsible onOpenChange={OnOpenChange}>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "3fr 2fr 4rem 20rem 6.5rem 5.5rem",
				}}
			>
				<div {...stylex.props(styles.cell_outline, styles.textOverflow)}>
					<Link href={plugin.homepage}>{plugin.title}</Link>
				</div>
				<div {...stylex.props(styles.cell_outline, styles.textOverflow)}>
					{plugin.brand}
				</div>
				<div {...stylex.props(styles.cell_outline)}>{plugin.paid}</div>

				<div
					{...stylex.props(styles.cell_outline)}
					style={{
						display: "flex",
						gap: "0.5rem",
						alignItems: "center",
					}}
				>
					{plugin.extensions.map((ext) => {
						return <Lozenge key={ext}>{ext}</Lozenge>;
					})}
				</div>

				<div {...stylex.props(styles.cell_outline)}>
					<Link href={plugin.download}>Download</Link>
				</div>

				<CollapsibleTrigger asChild>
					<div
						{...stylex.props(styles.cell_outline)}
						style={{
							cursor: "pointer",
							textDecoration: "underline",
							textAlign: "center",
						}}
					>
						{open ? "Close" : "Expand"}
					</div>
				</CollapsibleTrigger>
			</div>

			<CollapsibleContent>
				<div {...stylex.props(styles.cell_outline, styles.content_base)}>
					<img {...stylex.props(styles.img)} src={plugin.img} alt="" />

					{plugin.notes !== "" && (
						<div {...stylex.props(styles.cell_outline)}>{plugin.notes}</div>
					)}
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
