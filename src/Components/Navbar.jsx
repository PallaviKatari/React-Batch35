import "../Styles/Nav.css";
//Link -> instead of <a> tag -> SPA - Partial Rendering
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faCartArrowDown,
  faDatabase,
  faGaugeHigh,
  faHome,
  faLink,
  faPalette,
  faRecycle,
  faShop,
  faSort,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";

export default function Nav() {
  //Cart totalUniqueItems in Cart
  const { totalUniqueItems } = useCart();

  return (
    <div>
      <div
        className="vh-15 d-flex align-items-center position-fixed start-0 top-0"
        role="navigation">
        <div className="p-2">
          <div id="mainNav">
            <ul className="list-unstyled rounded ms-2 bg">
              <li>
                {/* <a href="home"></a> */}
                <Link className="vlink rounded border-0" to="">
                  <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="Gallery">
                  <FontAwesomeIcon icon={faPalette} /> <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="Products">
                  <FontAwesomeIcon icon={faShop} /> <span>Products</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="sort">
                  <FontAwesomeIcon icon={faSort} /> <span>Sort Movies</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="lifecycle">
                  <FontAwesomeIcon icon={faRecycle} />{" "}
                  <span>React Lifecycle</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="users">
                  <FontAwesomeIcon icon={faUser} /> <span>User Details</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="crud">
                  <FontAwesomeIcon icon={faTable} /> <span>User CRUD</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="axios">
                  <FontAwesomeIcon icon={faDatabase} /> <span>Axios</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="cart">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  <sup>{totalUniqueItems}</sup>
                  <span>Cart Demo</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="hooks">
                  <FontAwesomeIcon icon={faAnchor} />
                  <span>React Hooks</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="renderprops">
                  <FontAwesomeIcon icon={faLink} />
                  <span>React Props</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="hoc">
                  <FontAwesomeIcon icon={faGaugeHigh} />
                  <span>React HOC</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="hoc">
                  <FontAwesomeIcon icon={faGaugeHigh} />
                  <span>React HOC</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
