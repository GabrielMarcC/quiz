import { Checkbox } from "./Checkbox";
import { MoonLight } from "./svgs/MoonLight";
import { SunLight } from "./svgs/SunLight";

export const Header = () => {
  return (
    <header className="w-full flex justify-end">
      <div className="flex  items-center justify-center gap-2 w-[130px] h-[28px]">
        <div>
          <SunLight color="#626C7F" w={21} h={21} />
        </div>
        <Checkbox />
        <div>
          <MoonLight color="#626C7F" w={21} h={21} />
        </div>
      </div>
    </header>
  );
};
