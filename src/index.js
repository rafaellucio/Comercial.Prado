import logo from './logo.png';
import './index.css';

const page = `
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://www.comercialprado.com.br">
        <img src="${logo}" alt="Vivendo para tornar a sua vida mais bonita e com baixo custo.">
      </a>

      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <main class="main">

    <section class="product-form">
      <div class="container">
        <form action="/addproduct" method="POST">
          <div class="field has-addons">
            <p class="control">
              <span class="select">
                <select name="coin" aria-label="Moeda">
                  <option>R$</option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Preço" aria-label="Preço" />
            </p>
          </div>
          <div class="field">
            <label class="label" for="validadte">Validade</label>
            <p class="control">
              <input class="input" type="date" id="validate" name="validate" placeholder="DD/MM/YYYY" aria-label="Validade" />
            </p>
          </div>
          <div class="field">
            <label class="label" for="description">Descrição</label>
            <p class="control">
              <textarea class="textarea" id="description" name="description" placeholder="Descreva um pouco sobre o produto..." aria-label="Descreva um pouco sobre o produto..."></textarea>
            </p>
          </div>
          <div class="field">
            <label class="label" for="file">Imagem</label>
            <p class="control">
              <input class="input" id="file" name="file" type="file" placeholder="Text input" aria-label="Selecione uma imagem para o produto"/>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Cadastrar</button>
            </p>
            <p class="control">
              <button class="button is-link">Cancel</button>
            </p>
          </div>
        </form>
      </div>
    </section>

    <hr>

    <section class="products">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footUnknowner-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

document.querySelector('#root').innerHTML = page;
