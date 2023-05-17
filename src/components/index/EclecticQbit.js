import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import { H1, H2, H3, H5, H6, H7, H8, H9 } from "../text/Headers";
import { P1, P2, P3, P4 } from "../text/Paragraphs";

export default function EclecticQbit() {
  return (
    <div className="flex flex-col space-y-full gap-[5vh] items-center justify-center min-h-screen">
      <div className="flex items-center justify-center font-extrabold uppercase w-full">
        <MouseMoveGradient
          className="w-full text-center"
          from="#FF6600"
          to="#9500E9"
        >
          <H3 translationPath="eclecticQbit/title/p1" />
          <H3 translationPath="eclecticQbit/title/p2" />
        </MouseMoveGradient>
      </div>
      <div className="grid gap-2 w-2/3 text-center">
        <P1
          translationPath="eclecticQbit/h1"
          className="text-orange uppercase font-bold"
        />
        <P2 translationPath="eclecticQbit/p1" />
      </div>
    </div>
  );
}
