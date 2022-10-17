import useShops from '../../hooks/useShops';

export default function Shops() {
  const { shops } = useShops();
  console.log(shops);
  //test to see is query is doing anything
  return <div>Shops</div>;
}
