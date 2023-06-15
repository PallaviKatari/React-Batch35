import "../Styles/Nav.css";
//Link -> instead of <a> tag -> SPA - Partial Rendering
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div>
      <div
        className="vh-15 d-flex align-items-center position-fixed start-0 top-0"
        role="navigation">
        <div className="p-2">
          <div id="mainNav">
            <ul className="list-unstyled rounded ms-2">
              <li>
                <Link className="vlink rounded border-0" to="Home">
                  <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="vlink rounded border-0" to="Gallery">
                  <FontAwesomeIcon icon={faPalette} /> <span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
