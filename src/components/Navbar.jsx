function Navbar() {
	return (
		<nav className="px-[10px] h-[8vh] flex justify-between lg:justify-around items-center shadow-md w-[100%] gap-[10px] dark:text-white bg-[#ffb3b3]">
			<h1 className=" font-bold text-[13px] font-Cairo sm:text-[23px] dark:self-center ">
				National Higher School of Advanced Technlogies
			</h1>
			<img
				src="assets/ENSTA-logo.png"
				alt=""
				className="w-[40px] dark:brightness-0 dark:invert"
			/>
			<h1
				className=" font-bold sm:text-[23px] font-Cairo text-[14px] hidden lg:block"
				dir="rtl">
				المدرسة الوطنية العليا للتكنولوجيات المتقدمة
			</h1>
		</nav>
	);
}

export default Navbar;
