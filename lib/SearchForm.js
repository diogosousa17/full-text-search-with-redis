import { useState } from 'react';

export default function CarForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result);
      setHits(result['cars']);
    }
  };

  return (
    <div>
      <input onChange={search} type="text" />

        {hits.map((hit) => (
          <>
            <h1 key={hit.entityId}>
              {hit.make} {hit.model}
            </h1>
            <img src={hit.image} style={{width:"200px", height:"200px", objectFit:"cover"}} />
            </>
          ))}
    </div>
  );
}