export default function Card() {
	return (
		<div>
			<img
				src="/public/images/image-omelette.jpeg"
				alt="omelette"
				className="w-full outline-2"
			/>
			{/* content */}
			<div className="p-6 space-y-4">
				<h1 className="font-serif font-bold text-stone-900 font-">
					Simple Omelette Recipe
				</h1>
				<p className="font-outfit text-stone-500">
					An easy and quick dish, perfect for any meal. This classic omelette
					combines beaten eggs cooked to perfection, optionally filled with your
					choice of cheese, vegetables, or meats.
				</p>
				{/* preparation */}
				<div className="bg-rose-50 p-4 px-6 rounded-lg">
					<h2 className="font-outfit font-bold text-rose-800 text-lg">
						Preparation time
					</h2>
					<ul
						className="list-disc list-inside 
						font-outfit text-stone-600 marker:text-rose-800 
						space-y-1 mt-2"
					>
						<li>
							<b>Total</b>: Approximately 10 minutes
						</li>
						<li>
							<b>Preparation</b>: 5 minutes
						</li>
						<li>
							<b>Cooking</b>: 5 minutes
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-lg font-serif text-brown-800 mb-2">
						Ingredients
					</h2>
					<ul
						className="list-disc list-inside font-outfit text-stone-500 
						marker:text-rose-800 space-y-1 pl-1"
					>
						<li>2-3 large eggs</li>
						<li>Salt, to taste</li>
						<li>Pepper, to taste</li>
						<li>1 tablespoon of butter or oil</li>
						<li>
							Optional fillings: cheese, diced vegetables, cooked meats, herbs{" "}
						</li>
					</ul>
				</div>
				<hr className="text-stone-300 my-7" />
				<div>
					<h2 className="text-lg font-serif text-brown-800 mb-2">
						Instructions
					</h2>
				</div>
			</div>
		</div>
	);
}
