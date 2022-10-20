import Loading from '../Loading/Loading';


export function Favorites({ favorites, shops, loadFave, error }) {
  
  const getFavorites = () => {
    const results = favorites.map(fave => (
      shops.find(shop => {
        return shop.id === fave.yelp_id;
      })
    ));
    return results;
  };
    
  const results = getFavorites();
  const userFaves = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] !== undefined) 
      userFaves.push(results[i]);
  }
    
  if (loadFave) return <span><Loading /></span>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <div>
      {console.log('userFaves are: ', userFaves)}
      {userFaves.length === 0 ? <span>add some favorites to see them here</span> : 
        userFaves.map(
          fave => (
            <div key={fave.id}>
              <h3>{fave.name}</h3>
            </div>
          )
        )
      }
    </div>
  );
}
