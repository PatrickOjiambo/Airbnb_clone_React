function Card(props) {
    return (
        <div className="Card">
            <img src={props.coverImg} alt="Displays a card" className="Card--photo" />
            <section className="Card--section">
                <div className="Ratings">
                    <img src="Star 1.png" alt="Ratings star" className="Card--star" />
                    <p className="Reviews">{`${props.rating}(${props.reviewCount})*${props.location}`}</p>
                </div>
                <p className="say">{props.title}</p>
                <p><strong>From ${props.price}</strong>/person</p>
            </section>
        </div>
    );
}
export default Card;