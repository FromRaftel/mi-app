import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.containerNavbar}>
            <img src="https://res.cloudinary.com/dhgzeml3y/image/upload/v1680662457/samples/ecommerce/2697432_sq5ngc.png" alt="la-tienda" />
            <ul className={styles.listStyle}>
                <li><a href="#">Todos</a></li>
                <li><a href="#">Pantalones</a></li>
                <li><a href="#">Camisas</a></li>
                <li><a href="#">Remeras</a></li>
            </ul>
            <CartWidget />
        </div>
    )
};

