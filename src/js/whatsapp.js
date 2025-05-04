document.addEventListener("DOMContentLoaded", function () {
    const cantidadInput = document.getElementById("cantidad");
    const btnSumar = document.getElementById("sumar");
    const btnRestar = document.getElementById("restar");
    const whatsappBtn = document.querySelector(".whatsapp-button");
  
    btnSumar.addEventListener("click", () => {
      cantidadInput.value = parseInt(cantidadInput.value) + 1;
    });
  
    btnRestar.addEventListener("click", () => {
      if (parseInt(cantidadInput.value) > 1) {
        cantidadInput.value = parseInt(cantidadInput.value) - 1;
      }
    });
  
    whatsappBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const producto = whatsappBtn.getAttribute("data-producto");
      const precio = parseInt(whatsappBtn.getAttribute("data-precio")) || 0;
      const cantidad = parseInt(cantidadInput.value) || 1;
      const total = precio * cantidad;
  
      const mensaje = `Hola, quiero comprar ${cantidad} unidad/es de ${producto}. Total: $${total} UYU`;
      const telefono = "59893944122";
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    });
  });
  