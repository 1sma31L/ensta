import AccordionCustomIcon from "./AccordionCustomIcon";
function FAQ() {
	return (
		<div className="flex justify-center items-center  flex-col w-[100%] my-5  p-3">
			<div className=" flex justify-center items-center flex-col  rounded-lg ">
				<h1 className="text-gray-800 font-bold md:text-[35px] text-[23px] font-Cairo  dark:text-white self-end">
					FAQ | الأسئلة المتكررة
				</h1>
				<AccordionCustomIcon />
			</div>
		</div>
	);
}

export default FAQ;
