/* eslint-disable react/prop-types */
function Card({ Img, title, description }) {
	return (
		<div
			className="flex flex-col justify-start items-center w-[250px] h-[400px] dark:text-white font-Cairo  border-2 border-solid dark:border-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 shadow-md"
			dir="rtl">
			<img src={Img} alt="" className="w-[100%] h-[200px] object-cover" />
			<div className="flex flex-col  p-3 items-center">
				<h3 className="text-[20px] my-2 font-bold w-[100%]" dir="rtl">
					{title}
				</h3>
				<p className="text-[14px]" dir="rtl">
					{description}
				</p>
			</div>
		</div>
	);
}

export default Card;
