"use client"
import "@/styles/main.sass";
import FeaturedProducts from "@/app/api/routes/featuredProducts";

export default function Main() {
    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="featured">
                        <div className="text">
                            <h1>Todos os Produtos</h1>
                        </div>

                        <FeaturedProducts />
                    </div>
                </div>
            </div>
        </main>
    )
}