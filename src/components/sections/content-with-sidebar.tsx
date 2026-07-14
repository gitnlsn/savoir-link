import type { ReactNode } from "react";

interface ContentWithSidebarProps {
	content: ReactNode;
	sidebar: ReactNode;
	sidebarPosition?: "left" | "right";
	sidebarWidth?: "narrow" | "normal" | "wide";
	className?: string;
}

const sidebarWidthClasses = {
	narrow: "lg:grid-cols-[250px_1fr]",
	normal: "lg:grid-cols-[300px_1fr]",
	wide: "lg:grid-cols-[400px_1fr]",
};

export function ContentWithSidebar({
	content,
	sidebar,
	sidebarPosition = "right",
	sidebarWidth = "normal",
	className = "",
}: ContentWithSidebarProps) {
	const gridOrder =
		sidebarPosition === "left"
			? "lg:grid-cols-[300px_1fr]"
			: "lg:grid-cols-[1fr_300px]";

	return (
		<div className={`grid gap-8 lg:gap-12 ${gridOrder} ${className}`}>
			{sidebarPosition === "left" ? (
				<>
					<aside className="lg:sticky lg:top-8 lg:h-fit">{sidebar}</aside>
					<main>{content}</main>
				</>
			) : (
				<>
					<main>{content}</main>
					<aside className="lg:sticky lg:top-8 lg:h-fit">{sidebar}</aside>
				</>
			)}
		</div>
	);
}
