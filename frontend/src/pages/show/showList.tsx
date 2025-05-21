import { Link } from 'react-router-dom';
import styles from './ShowList.module.css';
import { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { fetchShows } from '../../api/show';

const ShowList = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetchShows()
      .then(setShows)
      .catch(console.error);
  }, []);



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Show List</h2>
      <div className={styles.scrollContainer}>
        {shows.map((show) => (
           <Link to={`/shows/${show.id}`} key={show.id} className={styles.cardLink}>
                <div className={styles.card}>
                    <img src={show.imageUrl} alt={show.name} className={styles.image} />
                    <div className={styles.info}>
                        <h3 className={styles.name}>{show.name}</h3>
                        <p className={styles.date}>{show.startDate} ~ {show.endDate}</p>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
);
};

export default ShowList;