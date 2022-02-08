import Head from "../../components/Head";

const NotFound = () => {

  return (
    <div className="container mainContainer">
      <Head title='Página não existente' description="Página não existente" />
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </div>
  )
};

export default NotFound;
