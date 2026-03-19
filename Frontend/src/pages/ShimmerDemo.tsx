import ShimmerButton from "../components/ui/shimmer-button";

export default function ShimmerDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Shimmer Button</h1>
        <p className="text-slate-500 font-medium">An elegant, animated button with a moving gradient.</p>
      </div>
      
      <div className="flex gap-6">
        <ShimmerButton className="rounded-2xl shadow-xl">
          Premium Shimmer
        </ShimmerButton>

        <ShimmerButton className="bg-blue-600 text-white border-blue-500 dark:bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20">
          Blue Shimmer
        </ShimmerButton>
      </div>

      <div className="mt-12 p-8 bg-slate-900 rounded-[32px] flex flex-col items-center gap-6">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Dark Mode Preview</p>
        <ShimmerButton className="dark bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] text-slate-400 border-slate-800 rounded-2xl">
          Dark Shimmer
        </ShimmerButton>
      </div>
    </div>
  );
}
