import MotionButton from "../components/ui/motion-button";

export default function DemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-8">
      <h1 className="text-4xl font-black text-slate-900">Motion Button Demo</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <MotionButton label="Get Started" />
        <MotionButton label="Learn More" classes="w-44" />
        <MotionButton label="Contact Us" classes="h-12 w-48" />
      </div>
      <p className="text-slate-500">Hover over the buttons to see the animation.</p>
    </div>
  );
}
