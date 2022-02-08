import Head from "../../components/Head";
import Feed from "../../components/Feed";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com o feed de fotos" />
      <Feed />
    </section>
  )
};

export default Home;
