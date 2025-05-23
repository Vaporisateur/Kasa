import Banner from "../../components/Banner/Banner";
import BannerHome from "../../assets/BannerHome.jpg";
import CardContainer from "../../components/CardContainer/CardContainer";
import logementsData from "../../data/logements.json";
import './Home.scss';

export default function Home() {
  return (
    <div className="content container">
      <div className="banner-home">
        <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
      </div>
      <CardContainer logements={logementsData} />
    </div>
  );
}