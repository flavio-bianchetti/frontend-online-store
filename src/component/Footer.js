import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <h5>Project Front-End Online Store</h5>
          <p>Conteúdos trabalhados neste projeto:</p>
          <ul>
            <li>
              Entender o que são Métodos Ágeis
            </li>
            <li>
              Entender o que é Kanban
            </li>
            <li>
              Entender o que é Scrum
            </li>
            <li>
              Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
            </li>
            <li>
              Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End
            </li>
          </ul>
        </div>
        <div className="footer-middle">
          <a href="https://betrybe.com/" rel="noreferrer" target="_blank">
            <p>
              Trybe
            </p>
          </a>
          <p>
            - 2021-2022 -
          </p>
        </div>
        <div className="footer-right">
          <h5>Grupo 25</h5>
          <div>
            Flávio Bianchetti
            <a href="https://github.com/flavio-bianchetti" rel="noreferrer" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
                alt="github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/flaviobianchetti/">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div>
            Gabriel Henrique Araujo Jorge
            <a href="https://github.com/GabrielJorge94" rel="noreferrer" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
                alt="github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/gabrieelh/">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div>
            Jessé Benevides Santos
            <a href="https://github.com/JesseBenevides" rel="noreferrer" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
                alt="github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/jessebenevides/">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div>
            Julio Cesar Silva Nunes
            <a href="https://github.com/juliosinu" rel="noreferrer" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
                alt="github icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/julio-cesar-silva-nunes-9a685820b/">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div>
            Pedro Walpablôndy Soares
            <a href="https://github.com/allpha23" rel="noreferrer" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/20/000000/github.png"
                alt="github icon"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
