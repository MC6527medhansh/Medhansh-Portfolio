import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#003366"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-[#003366]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#003366"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#003366]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#003366"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#003366]"> React</span>,
            <span className="font-semibold text-[#003366]"> Typescript</span>,
            <span className="font-semibold text-[#003366]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#003366]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#003366"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#003366]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
