import { HeaderCategoryPreview } from "./HeaderCategoryPreview";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <header className="py-6 lg:px-12 xl:px-32 lg:pt-9 w-screen flex items-center justify-between bg-transparent px-6">
      <HeaderCategoryPreview />
      <div className="flex items-center grow justify-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
};
