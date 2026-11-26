import Cards from "../shared/components/cards";

export default function Home() {
    const ucs = [
        {id: 1, price : 90, afterPrice : 100, count : 60},
        {id: 2, price : 190, afterPrice : 210, count : 120},
        {id: 3, price : 280, afterPrice : 300, count : 180},
        {id: 4, price : 370, afterPrice : 400, count : 325},
        {id: 5, price : 470, afterPrice : 500, count : 385},
        {id: 6, price : 680, afterPrice : 700, count : 660},
        {id: 7, price : 780, afterPrice : 800, count : 720},
        {id: 8, price : 1060, afterPrice : 1100, count : 985},
        {id: 9, price : 1350, afterPrice : 1400, count : 1320},
        {id: 10, price : 1720, afterPrice : 1750, count : 1800},
        {id: 11, price : 2100, afterPrice : 2200, count : 2125},
        {id: 12, price : 2400, afterPrice : 2500, count : 2460},
        {id: 13, price : 3400, afterPrice : 3500, count : 3850},
        {id: 14, price : 5100, afterPrice : 5200, count : 5650},
        {id: 15, price : 6500, afterPrice : 6600, count : 8100},
    ]
  return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-5">
            {ucs.map((p)=>(
                <Cards key={p.id} id={p.id} count={p.count} price={p.price} afterPrice={p.afterPrice}/>
            ))}
        </div>    
  );
}