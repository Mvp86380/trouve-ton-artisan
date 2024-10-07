const Rating = ({ rating, color }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="filled-star">&#9733;</span>); // Étoile pleine si la note est égale ou supérieure à i
      } else {
        stars.push(<span key={i} className="empty-star">&#9734;</span>); // Étoile vide sinon
      }
    }
  
    return <span style={{ color: color }}>{stars}</span>;
  };
  
    export default Rating