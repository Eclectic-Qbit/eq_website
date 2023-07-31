import MemoryGame from "@/components/gamification/MemoryGame";

export default function MemoryPage() {
  return (
    <div className="w-full h-full min-h-screen gap-10 flex flex-col items-center justify-center pt-20 mb-8">
      <div id="game">
        <MemoryGame />
      </div>
    </div>
  );
}
