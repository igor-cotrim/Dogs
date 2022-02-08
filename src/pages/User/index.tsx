import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Feed from "../../components/Feed";
import UserPhotoPost from "../../components/UserPhotoPost";
import UserHeader from "../../components/UserHeader";
import UserStats from "../../components/UserStats";
import Head from "../../components/Head";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../NotFound";

const User = () => {
  const { data } = useContext<any>(UserContext)

  return (
    <section className="container">
      <Head title='Minha Conta' description="Pagina de Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
};

export default User;
