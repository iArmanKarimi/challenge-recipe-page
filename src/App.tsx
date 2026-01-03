import "./App.css";

function App() {
	return (
		<main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
			<div className="w-full max-w-xl rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/60 p-8 space-y-3">
				<p className="text-sm font-semibold uppercase tracking-[0.08em] text-indigo-600">
					Tailwind ready
				</p>
				<h1 className="text-2xl font-bold">Build your recipe page</h1>
				<p className="text-slate-600">
					Start editing{" "}
					<code className="rounded bg-slate-100 px-1 py-0.5 text-sm">
						src/App.tsx
					</code>{" "}
					to craft your layout with Tailwind utilities.
				</p>
				<div className="flex items-center gap-2 text-sm text-slate-500">
					<span
						className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
						aria-hidden
					/>
					<span>Hot reload powered by Vite</span>
				</div>
			</div>
		</main>
	);
}

export default App;
