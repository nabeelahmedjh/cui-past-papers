import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-48">
      <p className="mb-4 text-2xl">Beginning of something great ( ͡° ͜ʖ ͡°)</p>
      <Button size="lg" onClick={() => alert("No biches for you 👈(ﾟヮﾟ👈)")} className="">Surprise</Button>
    </div>
  )
}
