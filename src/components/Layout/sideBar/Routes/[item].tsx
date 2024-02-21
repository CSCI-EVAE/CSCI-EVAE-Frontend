import { Link } from "react-router-dom";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ItemProps {
  page: string;
}

const Item: React.FC<ItemProps> = ({ page }) => {
  if (page === "homepage") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <div id="page">
        <Link to="/">
        <button className="btn btn-large">
  <FontAwesomeIcon icon={faArrowRotateLeft} />
  Back to Home
</button>

        </Link>
        {page}
      </div>
    );
  }
};

export default Item;
