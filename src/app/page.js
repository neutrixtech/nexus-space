import Homes from "../app/components/Home/home";
import Header from "../app/components/common/Headers";
import About from "../app/components/Home/about";
import Contact from "./components/Home/contactApp";
import Services from "./components/Home/services";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Homes />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
