import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <Main/>
    <CardList/>
    </>
  );
}
