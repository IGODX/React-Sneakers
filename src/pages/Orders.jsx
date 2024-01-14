
import React from "react";
import Card from "../components/Card"
import AppContext from "../context";
import axios from "axios";
 
function Orders({items}) {
    const {onAddToFavorite, onAddToCart} = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
          try {
            setIsLoading(true);
            const { data } = await axios.get("https://65a17d7e600f49256fb1bcfc.mockapi.io/orders");
      
            setOrders(data.reduce((prev, obj) => {
                if (obj.items && Array.isArray(obj.items)) {
                  return [...prev, ...obj.items];
                } else {
                  return prev;
                }
              }, []));

          } catch (error) {
            console.error(error);
          }
          setIsLoading(false);
        })();
      }, []);

    return (
      <div className="content">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="mainTitle">Мои заказы</h1>
        
        </div>
        <div className="d-flex flex-wrap justify-center">
        {(isLoading ? [...Array(8)] : orders)
            .map((item, index) => (
                <Card
                key={index}
                loading={isLoading}
                isAdded={false}
                {...item}
              />
            ))}
        </div>
      </div>
    );
  }
  
  export default Orders;
  