document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input")
    const searchResults = document.createElement("div")
    searchResults.className = "search-results"
  
    // Lista de todos los productos disponibles
    const products = [
      { name: "Peach 🍑🍑", url: "peach.html", status: "sin-stock" },
      { name: "Sour Apple Ice 🍏🧊", url: "sour-apple.html", status: "disponible" },
      { name: "Straw Kiwi 🍓🥝", url: "straw-kiwi.html", status: "disponible" },
      { name: "Strawberry Ice 🍓🧊", url: "strawberry-ice.html", status: "sin-stock" },
      { name: "Watermelon Ice 🍉🧊", url: "watermelon-ice.html", status: "disponible" },
      { name: "Kiwi Passionfruit 🥝💖", url: "kiwi-passion-guava.html", status: "disponible" },
      { name: "Grape Ice 🍇🧊", url: "grape-ice.html", status: "disponible" },
      { name: "Watermelon Sour Peach 🍉🍑", url: "watermelon-sour-peach.html", status: "disponible" },
      { name: "Mango Twist 🥭💫", url: "mango-twist.html", status: "disponible" },
      { name: "Lime Grapefruit 🍋‍🟩🍑", url: "lime-grape.html", status: "disponible" },
      { name: "Menthol 🌿🧊", url: "menthol.html", status: "disponible" },
      { name: "Blue Razz Ice 🫐🧊", url: "blue -razz.html", status: "disponible" },
    ]
  
    if (searchInput) {
      // Insertar el contenedor de resultados después del formulario de búsqueda
      const searchForm = searchInput.closest("form")
      searchForm.parentNode.insertBefore(searchResults, searchForm.nextSibling)
  
      // Manejar eventos de entrada en el campo de búsqueda
      searchInput.addEventListener("input", handleSearch)
      searchInput.addEventListener("focus", handleSearch)
  
      // Cerrar resultados al hacer clic fuera
      document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
          searchResults.style.display = "none"
        }
      })
    }
  
    function handleSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim()
  
      // Limpiar resultados anteriores
      searchResults.innerHTML = ""
  
      if (searchTerm.length < 1) {
        searchResults.style.display = "none"
        return
      }
  
      // Filtrar productos que coincidan con el término de búsqueda
      const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm))
  
      if (matchedProducts.length > 0) {
        // Mostrar resultados
        searchResults.style.display = "block"
  
        matchedProducts.forEach((product) => {
          const resultItem = document.createElement("a")
          resultItem.href = product.url
          resultItem.className = "search-result-item"
  
          // Destacar el texto coincidente
          const regex = new RegExp(`(${searchTerm})`, "gi")
          const highlightedName = product.name.replace(regex, "<strong>$1</strong>")
  
          resultItem.innerHTML = highlightedName
  
          // Añadir indicador de stock
          if (product.status === "sin-stock") {
            const stockBadge = document.createElement("span")
            stockBadge.className = "stock-badge out-of-stock"
            stockBadge.textContent = "Sin stock"
            resultItem.appendChild(stockBadge)
          }
  
          searchResults.appendChild(resultItem)
        })
      } else {
        // Mostrar mensaje de no resultados
        searchResults.style.display = "block"
        const noResults = document.createElement("div")
        noResults.className = "no-results"
        noResults.textContent = `No se encontraron productos para "${searchTerm}"`
        searchResults.appendChild(noResults)
      }
    }
  })
  
