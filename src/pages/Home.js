import Header from "../components/Header";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="D_Home">
      <Header />
    </div>
  );
}

//autre façon d'exporter un component
// const Home = () => {
//   return (
//     <div>
//      <Header />
//     </div>
//   );
// };
// export default Home;
