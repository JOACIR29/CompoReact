import './styles.css';
import carIcon from '../../assets/cart.svg';

export default function header() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <h1>CompoReact</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={carIcon} alt="Carrinho de compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
  );
}
