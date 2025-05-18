import { Link } from 'react-router-dom';
import styles from './ShowList.module.css';
import { useEffect, useState } from 'react';

interface Show {
  showId: number;
  name: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

const ShowList = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    // 추후 API 연동 예정
    const mockData: Show[] = [
      {
        showId: 1,
        name: 'Spongebob\'s Guitar',
        imageUrl: '/src/assets/mock/spongebob.jpg',
        startDate: '2025-05-10',
        endDate: '2025-05-12',
      },
      {
        showId: 2,
        name: 'Patrick\'s Super Star',
        imageUrl: '/src/assets/mock/patrick.jpeg',
        startDate: '2025-06-01',
        endDate: '2025-06-03',
      },
      {
        showId: 2,
        name: 'Squidward\'s Clarinet',
        imageUrl: '/src/assets/mock/Squidward.png',
        startDate: '2025-10-10',
        endDate: '2025-10-10',
      },
    ];
    setShows(mockData);
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Show List</h2>
      <div className={styles.scrollContainer}>
        {shows.map((show) => (
           <Link to={`/shows/${show.showId}`} key={show.showId} className={styles.cardLink}>
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