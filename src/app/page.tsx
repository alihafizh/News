import Carousel from "./components/carausel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SecNavbar from "./components/secnavbar";
import HotNews from "./pages/hotnews";
import NewsCarousel from "./pages/newscarousek";

const newsData = [
  { id: 1, title: "Breaking News: Big Event!" },
  { id: 2, title: "Latest Tech Updates" },
  { id: 3, title: "Market Insights" },
  { id: 4, title: "Health and Wellness Tips" },
  { id: 5, title: "Global Politics: New Developments" },
  { id: 6, title: "Sports Highlights of the Week" },
  { id: 7, title: "Climate Change: Urgent Action Needed" },
  { id: 8, title: "Innovative Startups to Watch" },
  { id: 9, title: "Entertainment Buzz: Movie Premieres" },
  { id: 10, title: "Travel Destinations for 2024" },
];

export default function Home() {
  return (
    <div className="w-full">
      <Navbar news={newsData} />
      <Carousel />
      <SecNavbar />

      <NewsCarousel />
      <HotNews />

      <Footer />
    </div>
  );
}

