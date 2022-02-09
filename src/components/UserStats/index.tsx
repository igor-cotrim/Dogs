import { lazy, Suspense, useEffect } from 'react';

import Head from '../Head';
import Loading from '../Loading';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../api';
const UserStatsGraph = lazy(() => import('../UserStatsGraph'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)

    return (
      <Suspense fallback={<div></div>}>
        <Head title='Estatísticas' description="Pagina de estatísticas" />
        <UserStatsGraph data={data} />
      </Suspense>
    )
  else return null
};

export default UserStats;
