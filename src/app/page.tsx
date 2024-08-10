import Navbar from "./components/navbar";
import Carausel from "./components/carausel";
import SecNavbar from "./components/secnavbar";
import HotNews from "./pages/hotnews";
import News from "./pages/news";

export default function Home() {
  return (
    <div className=" w-full">
      
        <Navbar />
        <Carausel />
        <SecNavbar />
     

      <News/>
        <HotNews />
     

     <footer className="bg-gray-700 h-56">
      sosial media
     </footer>
    </div>
  );
}
