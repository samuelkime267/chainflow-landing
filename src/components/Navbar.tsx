import Blockchain from "./icons/blockchain";
import { navLinks } from "../data/nav-link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between gap-4 p-4">
      <a href="#">
        <Blockchain className="w-12 h-12 !text-primary" />
      </a>

      <div className="hidden lg:flex items-center gap-4 border border-white/40 p-2.5 rounded-full bg-white/10">
        {navLinks.map(({ link, name }, i) => {
          const isActive = i === 0;
          return (
            <a
              href={link}
              key={i}
              className={`text-white capitalize border py-1 px-3 rounded-full hover:border-primary/60 hover:bg-primary/20 ${
                isActive
                  ? "bg-primary/20 border-primary/60"
                  : "border-transparent"
              }`}
            >
              {name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <a href="#">Register</a>
        <Button btnType="primary">Application</Button>
      </div>
    </nav>
  );
}
