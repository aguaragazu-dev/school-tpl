"use client";

import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineTitle,
	TimelineIcon,
	TimelineDescription,
	TimelineContent,
	TimelineTime,
} from "@/components/timeline/timeline";

export interface TimelineElement {
	id: number;
	title: string;
	date: string;
	description: string;
}

interface TimelineLayoutProps {
	items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
	return (
		<Timeline>
			
			{items.map((item, index) => (
				<TimelineItem key={index}>
					<TimelineConnector />
					<TimelineHeader>
						<TimelineTime>{item.date}</TimelineTime>
						<TimelineIcon />
						<TimelineTitle>{item.title}</TimelineTitle>
					</TimelineHeader>
					<TimelineContent>
						<TimelineDescription>{item.description}</TimelineDescription>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};