const page = `
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
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
                <select>
                  <option>R$</option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Preço">
            </p>
          </div>
          <div class="field">
            <label class="label">Validade</label>
            <p class="control">
              <input class="input" type="date" placeholder="DD/MM/YYYY">
            </p>
          </div>
          <div class="field">
            <label class="label">Descrição</label>
            <p class="control">
              <textarea class="textarea" placeholder="Descreva um pouco sobre o produto..."></textarea>
            </p>
          </div>
          <div class="field">
            <label class="label">Imagem</label>
            <p class="control">
              <input class="input" type="file" placeholder="Text input">
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

document.getElementById('root').innerHTML = page;
