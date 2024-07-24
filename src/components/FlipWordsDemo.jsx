import { FlipWords } from "./ui/flip-words";

export default function FlipWordsDemo() {
	const words = ["Learn", "Enjoy", "Practice", "Inovate"];

	return (
		<div className="h-[92vh]  flex lg:flex-row mg:justify-around justify-center items-center gap-x-[20px] flex-col m-5 md:m-0">
			<div className=" flex justify-center items-center px-4 font-Cairo dark:text-white">
				<div className="md:text-4xl text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
					Are You Ready To
					<br className="md:hidden block" />
					<FlipWords
						words={words}
						className="font-bold text-[50px] my-[30px] text-red-600 "
					/>
					<br />
					At The{" "}
					<span className="font-bold">
						National Higher School of advenced Technologies
					</span>
				</div>
			</div>
			<img src="/src/assets/hero.png" alt="" width={"500px"} className="my-4" />
		</div>
	);
}
