import Link from "next/link";
import css from "./style.module.css";
const Navbar = () => {
  return (
    <nav className={css.minasa}>
      <Link href="/page">Sahifani biri</Link>
    </nav>
  );
};
export default Navbar;
