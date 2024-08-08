import { useNavigate } from "react-router-dom"
import "../index.css";


const Home = props => {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero-img-container">
                <div>
                    <h1>Your Favorite Food Delivered While <span class="highlight">Coding</span></h1>
                    <button id="order-pizza" className="btn" onClick={() => navigate("/pizza")}>Pizza ?</button>
                    <button className="btn" onClick={() => navigate("/pizza")}>Much More</button>
                </div>
                <div>
                <img src={require('./ivan-torres-MQUqbmszGGM-unsplash.jpg')} alt="pizza img" />
                </div>
            </section>
            <div className="nearby">
                <h3>Food Near You</h3>
            </div>
            <section className="food-container">
                
                <div class="restaurant">
                    <img src={require('./thabang-MRX9wQk4w7A-unsplash.jpg')} alt="mcdonalds"/>
                    <h3>McDonald's</h3>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div class="delivery-info">
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div class="restaurant">
                    <img src={require('./anna-pelzer-IGfIGP5ONV0-unsplash.jpg')} alt="salad"/>
                    <h3>Sweet Greens</h3>
                    <p>$$$ - Healthy - Salads</p>
                    <div class="delivery-info">
                        <p>30-45 Min</p>
                        <p>$4.99 Delivery Fee</p>
                    </div>
                </div>
                <div class="restaurant">
                    <img src={require('./tr-jy4t6SY9Ax0-unsplash.jpg')} alt="starbucks building"/>
                    <h3>Starbucks</h3>
                    <p>$$ - Coffee - Breakfast & Brunch</p>
                    <div class="delivery-info">
                        <p>10-15 Min</p>
                        <p>$2.99 Delivery Fee</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home