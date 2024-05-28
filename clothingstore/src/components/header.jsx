import "../css/header.css";

export default function Header () {
  <header>
    <div className="user">
      <Link href="/">
        <h1 className="title">RANNA CLOTHES</h1>
      </Link>
      <div className="container">
        <button onClick={() => (location.href = "login.html")}>
          Login
        </button>
        <button onClick={() => (location.href = "cadastro.html")}>
          Cadastro
        </button>
      </div>
    </div>
    <nav>
      <ul className="menu">
        <li>
          <Link href="coleções.html">Coleções</Link>
        </li>
        <li>
          <Link href="lancamento.html">Lançamentos</Link>
        </li>
        <li className="menusub">
          <Link href="#">Moda Feminina</Link>
          <ul className="submenu">
            <li>
              <Link href="./Produtos Femininos/camisetas_femininas.html">
                Camisetas
              </Link>
            </li>
            <li>
              <Link href="./Produtos Femininos/shorts_femininos.html">
                Shorts
              </Link>
            </li>
            <li>
              <Link href="./Produtos Femininos/calças_femininas.html">
                Calças
              </Link>
            </li>
            <li>
              <Link href="./Produtos Femininos/moletons_femininos.html">
                Moletons
              </Link>
            </li>
          </ul>
        </li>
        <li className="menusub">
          <Link href="#">Moda Masculina</Link>
          <ul className="submenu">
            <li>
              <Link href="./Produtos Masculinos/camisetas_masculina.html">
                Camisetas
              </Link>
            </li>
            <li>
              <Link href="./Produtos Masculinos/shorts_masculinos.html">
                Shorts
              </Link>
            </li>
            <li>
              <Link href="./Produtos Masculinos/calças_masculinas.html">
                Calças
              </Link>
            </li>
            <li>
              <Link href="./Produtos Masculinos/moletons_masculinos.html">
                Moletons
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
}