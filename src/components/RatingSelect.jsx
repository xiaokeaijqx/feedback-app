

function RatingSelect({rating, setRating}) {
    const handleClick = (e) => {

        setRating(Number(e.target.value));

    }
    return (
      <ul className="rating">
          <li><input
            type="radio"
            id="num1"
            name="rating"
            value="1"
            onChange={handleClick}
            checked={rating === 1}/>
              <label htmlFor="num1">1</label>
          </li>
          <li><input
            type="radio"
            id="num2"
            name="rating"
            value="2"
            onChange={handleClick}
            checked={rating === 2}/>
              <label htmlFor="num2">2</label>
          </li>
          <li><input
            type="radio"
            id="num3"
            name="rating"
            value="3"
            onChange={handleClick}
            checked={rating === 3}/>
              <label htmlFor="num3">3</label>
          </li>
          <li><input
            type="radio"
            id="num4"
            name="rating"
            value="4"
            onChange={handleClick}
            checked={rating === 4}/>
              <label htmlFor="num4">4</label>
          </li>
          <li><input
            type="radio"
            id="num5"
            name="rating"
            value="5"
            onChange={handleClick}
            checked={rating === 5}/>
              <label htmlFor="num5">5</label>
          </li>
      </ul>
    );
}

export default RatingSelect;
