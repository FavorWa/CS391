import { useState, useEffect } from 'react';
import Space from './Space.jsx';

export default function List(){
  const [space, setSpace] = useState([]);
  const [loading, isLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://finalspaceapi.com/api/v0/episode/');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const results = await response.json();
  
        setSpace(results);
        isLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        isLoading(false);
      }
    }
  
    fetchData();
  }, []);

return(
  <div>
    <h2>Final Space TV SHOW</h2>
    <div className='row'>
      {loading ? (
        <div>Loading...</div>
      ): (
        space.map((space) => (
          <Space
          key={space.id}
          name={space.name}
          img_url={space.img_url}
          director={space.director}
          />
        ))
      )}
    </div>
  </div>
);}