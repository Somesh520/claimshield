import { GlowingShadow } from "@/components/ui/glowing-shadow"

export function DemoOne() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-20">
      <GlowingShadow> 
         <span className="pointer-events-none z-10 m-8 text-center text-7xl md:text-9xl leading-none font-extrabold tracking-tighter text-white">
          Glowing Shadow
         </span>
      </GlowingShadow>
    </div>
  )
}

export default DemoOne;
