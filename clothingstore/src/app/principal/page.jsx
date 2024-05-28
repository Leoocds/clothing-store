import Link from "next/link";

export default function Home() {
  return (
    <div>
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
      <main>
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="carousel-slide">
              <Link href="coleções.html">
                <img
                  src="Imagens/Fotos e Banners/BannerCasal.png"
                  alt="Banner coleção de casal"
                />
              </Link>
            </div>
            <div className="carousel-slide">
              <Link href="coleções.html">
                <img
                  src="Imagens/Fotos e Banners/BannerMasc.png"
                  alt="Banner Coleção masculina"
                />
              </Link>
            </div>
            <div className="carousel-slide">
              <Link href="coleções.html">
                <img
                  src="Imagens/Fotos e Banners/BannerFem.png"
                  alt="Banner Coleção Feminina"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="Btns">
          <button id="prevBtn">◄</button>
          <button id="nextBtn">►</button>
        </div>

        <section className="lancamentos">
          <h2>LANÇAMENTOS</h2>

          <div className="lancamentoMasc">
            <Link href="lancamento.html">
              <img
                src="./Imagens/Fotos e Banners/LançamentoMasc1.jpg"
                alt="Lançamento Masculino"
              />
            </Link>
            <div className="aLancamentoMasc">
              <Link href="lancamento.html">VER A NOVIDADE!</Link>
            </div>
          </div>

          <div className="lancamentoFem">
            <Link href="lancamento.html">
              <img
                src="./Imagens/Fotos e Banners/LançamentoFem.jpg"
                alt="Lançamento Feminino 1"
              />
            </Link>
            <div className="aLancamentoMasc">
              <Link href="lancamento.html">VER A NOVIDADE!</Link>
            </div>
          </div>

          <div className="lancamentoCasal">
            <Link href="lancamento.html">
              <img
                src="./Imagens/Fotos e Banners/LançamentoCasal.jpg"
                alt="Lançamento Casal 1"
              />
            </Link>
            <div className="aLancamentoMasc">
              <Link href="lancamento.html">VER A NOVIDADE!</Link>
            </div>
          </div>
        </section>

        <div className="conteudo">
          <div className="history">
            <h2 className="h2history">
              RANNA CLOTHES: ONDE A CRIATIVIDADE ENCONTRA A INOVAÇÃO
            </h2>
            <p className="phistory">
              A RANNA CLOTHES é mais do que uma loja de roupas; é um laboratório
              <br />
              da moda onde a criatividade se encontra com a inovação.
              <br />
              Fundada por nossa apaixonada estilista, Clara, a RANNA CLOTHES é
              um lugar onde
              <br />
              a moda é uma forma de arte.
              <br />
              <br />
              Cada temporada traz uma nova coleção inspirada em viagens pelo
              mundo e na cultura global.
              <br />
              Nossa equipe de designers talentosos transforma essas inspirações
              em roupas únicas
              <br />
              e personalizadas, criando peças que contam histórias por meio do
              design.
              <br />
              <br />
              A RANNA CLOTHES é onde a moda se torna uma expressão de
              individualidade,
              <br />
              criatividade e compromisso com um mundo mais sustentável.
              <br />
              Junte-se a nós nesta jornada única da moda.
              <br />
              <br />
              Explore nossas coleções e descubra a arte da moda na RANNA
              CLOTHES.
            </p>
          </div>

          <div className="we">
            <h2 className="h2we">FAZEMOS DA MODA NOSSO ALGO MAIOR</h2>
            <p className="pwe">
              Um mundo de moda: Bem-vindo ao nosso universo de estilo, onde a
              criatividade encontra a inovação.
              <br />
              Somos uma boutique de moda que desafia as normas e redefine o seu
              guarda-roupa.
              <br />
              Ousamos ser diferentes, abraçamos a individualidade e desafiamos o
              convencional.
              <br />
              <br />
              Somos uma loja voltada para o futuro, com designs inovadores que
              combinam forma e função.
              <br />
              Testamos novas abordagens e tecnologias em ação, garantindo que
              nossas peças estejam à altura
              <br />
              do seu estilo de vida dinâmico.
              <br />
              <br />
              Junte-se a nós nesta jornada de moda.
              <br />
              Somos a sua casa para a criatividade, a inovação e a expressão
              pessoal.
              <br />
              Somos a loja onde a moda encontra o seu eu único.
            </p>
          </div>
        </div>

        <section className="newsletter">
          <h2>Inscreva-se na nossa Newsletter</h2>
          <p>Fique por dentro das últimas tendências e promoções especiais.</p>
          <form action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
            <button type="submit">Inscrever-se</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="footercontainer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-column">
                <h4>Sobre a Loja</h4>
                <ul>
                  <li>
                    <Link href="#">Sobre nós</Link>
                  </li>
                  <li>
                    <Link href="#">Lojas</Link>
                  </li>
                  <li>
                    <Link href="#">Sustentabilidade</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-center">
              <div className="footer-help">
                <h4>Ajuda</h4>
                <ul>
                  <li>
                    <Link href="#">Dúvidas gerais</Link>
                  </li>
                  <li>
                    <Link href="#">Contato</Link>
                  </li>
                  <li>
                    <Link href="#">Suporte</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-sociais">
                <h4>Redes Sociais</h4>
                <Link href="#">
                  <img
                    src="./imagens/PngsSociais/facebook-icon.png"
                    alt="Facebook"
                    className="footer-socials"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="./Imagens/PngsSociais/youtube-icon.png"
                    alt="Youtube"
                    className="footer-socials"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="./Imagens/PngsSociais/instagram-icon.png"
                    alt="Instagram"
                    className="footer-socials"
                  />
                </Link>
              </div>

              <div className="footer-payments">
                <h4>Formas de Pagamento</h4>
                <img
                  src="./Imagens/PngsFooter/logovisa.png"
                  alt="Cartão de Crédito"
                />
                <img
                  src="./Imagens/PngsFooter/logomastercard.png"
                  alt="Cartão de Crédito"
                />
                <img
                  src="./Imagens/PngsFooter/logoelo.png"
                  alt="Cartão de Crédito"
                />
                <img src="./Imagens/PngsFooter/logopaypal.png" alt="PayPal" />
                <img src="./Imagens/PngsFooter/logopix.png" alt="Pix" />
              </div>
            </div>
          </div>
          <hr className="line-break" />
          <div className="footer-importants">
            <ul>
              <li>
                <Link href="#">Configurações de Cookies</Link>
              </li>
              <li>
                <Link href="#">Termos e Condições</Link>
              </li>
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>
              Copyright &copy;2023 All rights reserved | Developed by{" "}
              <Link href="https://github.com/LeleoLP">Leonardo Pedroso</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
