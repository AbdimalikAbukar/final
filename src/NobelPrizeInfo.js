import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import './spinner.css';

const NobelPrizeInfo = () => {
  const { year } = useParams();
  const [loading, setLoading] = useState(true);
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    const fetchPrizes = async () => {
      try {
        const response = await fetch(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`);
        const data = await response.json();
        setPrizes(data.nobelPrizes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Nobel prizes:', error);
        setLoading(false);
      }
    };

    fetchPrizes();
  }, [year]);

  return (
    <div>
      <h1>Nobel Prizes for {year}</h1>
      {loading ? (
        <div className="spinner"></div> // Show spinner while loading
      ) : prizes.length ? (
        prizes.map((prize, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{prize.category.en}</h5>
              <p className="card-text">Date Awarded: {prize.dateAwarded}</p>
              <p className="card-text">Prize Amount: {prize.prizeAmount}</p>
              <Link to="/" className="btn btn-primary">Go Back</Link>
            </div>
          </div>
        ))
      ) : (
        <div className="card">
          <div className="card-body">
            <p className="card-text">No Prizes Awarded</p>
            <Link to="/" className="btn btn-primary">Go Back</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NobelPrizeInfo;