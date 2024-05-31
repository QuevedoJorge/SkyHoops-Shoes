document.addEventListener("DOMContentLoaded", function () {
  fetch(`js/data.json`)
    .then((response) => response.json())
    .then((data) => {
      let infoZapatillas = "";

      infoZapatillas += `<div class="row">`
      
      data.zapatillas.forEach((zapatilla, index) => {
        let disponible;
        let boton_precio;

        if (zapatilla.disponibilidad) {
          disponible = `<span class="badge text-bg-secondary">Disponible</span>`;
          boton_precio = `<button type="button" class="btn btn-outline-primary">${zapatilla.precio}$</button>`;
        } else {
          disponible = `<span class="badge text-bg-danger">No Disponible</span>`;
          boton_precio = `<button type="button" disabled class="btn btn-outline-secondary">${zapatilla.precio}$</button>`;
        }

        infoZapatillas += `
          <div class="col-md-3">
              <div class="card mb-5" style="width: 18rem;">
                <img src="${zapatilla.imagen}" class="card-img-top img-fluid" alt="${zapatilla.nombre}" width="50px">
                <div class="card-body">
                  <h5 class="card-title">${zapatilla.nombre} ${disponible}</h5>
                  <p class="card-text">${zapatilla.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Stock:</strong> ${zapatilla.stock} pares</li>
                  <li class="list-group-item"><strong>Categoría:</strong> ${zapatilla.categoria}</li>
                  <li class="list-group-item"><strong>Marca:</strong> ${zapatilla.marca}</li>
                </ul>
                <div class="card-body">
                  ${boton_precio}
                </div>
              </div>
            </div>
        `;
        if ((index + 1) % 4 === 0) {
          infoZapatillas += `</div><div class="row">`;
        }
      });
      infoZapatillas += `</div>`;
      document.getElementById("data").innerHTML = infoZapatillas;
    })
    .catch((error) => console.error("Error en el código", error));
});
