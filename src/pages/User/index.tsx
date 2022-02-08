import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Feed from "../../components/Feed";
import UserPhotoPost from "../../components/UserPhotoPost";
import UserHeader from "../../components/UserHeader";
import UserStats from "../../components/UserStats";
import { UserContext } from "../../contexts/UserContext";

const User = () => {
  const { data } = useContext<any>(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
};

export default User;
