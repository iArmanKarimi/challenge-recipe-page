export default function Card() {
	return (
		<div>
			<img
				src="/public/images/image-omelette.jpeg"
				alt="omelette"
				className="w-full"
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
					<ol
						className="list-decimal list-inside font-outfit text-bold text-stone-600 
						marker:text-rose-800 marker:font-bold space-y-2 pl-1"
					>
						<li>
							<span>
								<b>Beat the eggs:</b> In a bowl, beast the eggs with a pinch of
								salt and pepper until they are well mixed. You can add a table
								spoon of water or milk for a fluffier texture.
							</span>
						</li>
						<li>
							<span>
								<b>Heat the pan:</b> Place a non-stick frying pan over medium
								heat and add butter or oil
							</span>
						</li>
						<li>
							<span>
								<b>Cook the omelette:</b> Once the butter is melted and
								bubbling, pour in the eggs. Tilt the pan to ensure the eggs
								evenly coat the surface.
							</span>
						</li>
						<li>
							<span>
								<b>Add fillings (optional):</b> When the eggs begin to setat the
								edges but are still slightly runny in the middle, sprinkle your
								chosen fillings over one half of the omelette.
							</span>
						</li>
						<li>
							<span>
								<b>Fold and serve:</b> As the omelette continues to cook,
								carefully lift one edge and fold it over the fillings. Let it
								cook for another minute, then slide it onto a plate.
							</span>
						</li>
						<li>
							<span>
								<b>Enjoy:</b> Serve hot, with additional salt and pepper if
								needed.
							</span>
						</li>
					</ol>
				</div>
				<hr className="text-stone-300 my-7" />
				<div className="font-outfit text-stone-500">
					<h2 className="text-lg font-serif text-brown-800 mb-2">Nutrition</h2>
					<p>
						The table below shows nutritional values per serving without the
						additional fillings.
					</p>
					<div className="grid grid-cols-2 mt-5 text-center divide-stone-300 grid-table">
						<div>Calories</div>
						<div>227kcal</div>

						<div>Carbs</div>
						<div>0g</div>

						<div>Protein</div>
						<div>20g</div>

						<div>Fat</div>
						<div>22g</div>
					</div>
				</div>
			</div>
		</div>
	);
}
