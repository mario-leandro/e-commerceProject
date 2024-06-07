import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import UseApi from "@/app/api/api.js";
import "dotenv";

const FeaturedProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const response = await UseApi.getAllProducts();
            setData(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllData();
    }, []);
    
    return (
        <div className="featured-products">
            {loading && !data &&
                <p>Carregando...</p>
            }

            {data && data.map((i) => (
                <Link href={`/produto/${i.id}`} className="card" key={i.id}>
                    <div className="card-image">
                        <img src={i.image} alt="Imagem do produto" />
                    </div>

                    <div className="card-body">
                        <div className="card-name">
                            <h4>
                                {i.title.length > 18 ? i.title.substring(0, 18) + "..." : i.title}
                            </h4>
                        </div>

                        <div className="card-price">
                            <p>R${i.price.toFixed(2)}</p>
                        </div>

                        <div className="card-rate">
                            <p>
                                <FontAwesomeIcon icon={faStar} />
                                {i.rating.rate}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default FeaturedProducts;