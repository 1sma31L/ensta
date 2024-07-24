/* eslint-disable react/prop-types */
import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { QA } from "../../Constants";

export default function AccordionCustomIcon() {
	const [open, setOpen] = React.useState(1);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<div className="w-[100%] p-4">
			{QA.map((element) => {
				return (
					<div key={element.id} dir="rtl">
						<Accordion open={open === element.id}>
							<AccordionHeader onClick={() => handleOpen(element.id)}>
								<p className="font-Cairo font-bold text-[17px] md:text-[20px] text-right w-[100%] dark:text-white">
									{element.Q}
								</p>
							</AccordionHeader>
							<AccordionBody>
								<p className="font-Cairo text-right w-[100%] dark:text-white font-semibold">
									{element.A}
								</p>
							</AccordionBody>
						</Accordion>
					</div>
				);
			})}
		</div>
	);
}
