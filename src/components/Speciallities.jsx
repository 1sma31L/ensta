import Card from "./Card";
import { Cards } from "../../Constants";
function Speciallities() {
	return (
		<div className="flex flex-col flex-wrap justify-center items-center font-Cairo px-3 my-10 ">
			<h2
				className="md:text-[35px] text-[23px] font-bold my-5 self-end dark:text-white"
				dir="rtl">
				التخصصات التي تتيحها المدرسة :
			</h2>
			<h3
				className="md:text-[30px] text-[20px] dark:text-white font-bold my-10 self-end"
				dir="rtl">
				1) فرع إعلام آلي MI:
			</h3>
			<div className="flex flex-row flex-wrap justify-center items-center w-[100%] md:gap-[20px] gap-[5px]">
				{Cards.MI.map((card) => {
					return (
						<Card
							key={card.id}
							Img={card.img}
							title={card.title}
							description={card.description}
						/>
					);
				})}
			</div>
			<h3
				className="md:text-[30px] text-[20px] font-bold my-10 self-end dark:text-white"
				dir="rtl">
				2) فرع علوم و تكنولوجيا ST:
			</h3>
			<div className="flex flex-row flex-wrap justify-center items-center w-[100%] md:gap-[20px] gap-[5px]">
				{Cards.ST.map((card) => {
					return (
						<Card
							key={card.id}
							Img={card.img}
							title={card.title}
							description={card.description}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Speciallities;
