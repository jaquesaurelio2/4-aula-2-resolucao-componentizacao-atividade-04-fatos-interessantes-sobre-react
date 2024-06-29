import ReactLogo from "../../public/images/logo-react.svg";

export default function NavBar() {
  return (
    <nav className="navBar">
      <img src={ReactLogo} alt="Logo React" />
      <h1 className="navBarTitle">FatosReact</h1>
      <span className="navBarProject">FAST- Projeto 1</span>
    </nav>
  );
}
