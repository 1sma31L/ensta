import { useState } from "react";
import { Intro } from "../../Constants";

function Home() {
	const [youtubeID] = useState("OReE6Vj2n5w");

	return (
		<div className="font-Cairo self-center w-[100%] flex justify-center  flex-col items-center dark:text-white p-3 gap-[20px] leading-8">
			{Intro.map((section) => {
				return (
					<>
						<div
							className="flex flex-col justify-center items-end shadow-lg p-5 rounded-xl hover:shadow-xl transition-all duration-200"
							key={section.id}>
							<h2
								className="md:text-[35px] text-[23px] font-bold mb-5"
								dir="rtl">
								{section.title}
							</h2>

							<p
								className="text-right md:text-[17px] lg:text-[20px] text-[14px] text-normal indent-3 "
								dir="rtl">
								{section.description}
							</p>
						</div>

						{section.id === 2 ? (
							<iframe
								key="93"
								className="video rounded-xl my-3"
								title="Youtube player"
								style={{ aspectRatio: "16/9", width: "100%" }}
								sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
								src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}></iframe>
						) : null}
					</>
				);
			})}
		</div>
	);
}

export default Home;
