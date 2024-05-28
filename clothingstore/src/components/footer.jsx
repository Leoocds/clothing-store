import "../css/footer.css"

export default function footer() {
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
}