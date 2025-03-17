import Banner from "../../components/Banner/Banner";
import BannerHome from "../../assets/BannerHome.jpg";
import CardContainer from "../../components/CardContainer/CardContainer";
import logementsData from "../../data/logements.json";
import { useFetchData } from "../../hooks/useFetchData";
import './Home.scss';

export default function Home() {
  const { isLoading, data} = useFetchData(logementsData);
  return (
    <div className="container">
      <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
      <CardContainer logements={data} />
    </div>
  );
}