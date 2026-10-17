const cars = [
    { id: 1, brand: "Audi", model: "A3 Sportback", version: "35 TFSI S line", price: 26900, year: 2022, km: 28400, fuel: "Gasolina", transmission: "Automático", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=82", badge: "Selección Ruta", description: "Acabado S line, cambio automático e interior cuidado. Cómodo en ciudad y carretera." },
    { id: 2, brand: "BMW", model: "Serie 1", version: "118i M Sport", price: 24900, year: 2021, km: 35600, fuel: "Gasolina", transmission: "Automático", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=82", badge: "Muy equipado", description: "Deportivo y ágil, con paquete M Sport y conectividad completa." },
    { id: 3, brand: "Mercedes-Benz", model: "Clase A", version: "A 180 Progressive", price: 28900, year: 2023, km: 19200, fuel: "Gasolina", transmission: "Automático", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=82", badge: "Pocos kilómetros", description: "Compacto cómodo y tecnológico. Historial de mantenimiento verificado." },
    { id: 4, brand: "Toyota", model: "C-HR", version: "1.8 Hybrid Advance", price: 23900, year: 2022, km: 31500, fuel: "Híbrido", transmission: "Automático", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=82", badge: "Etiqueta ECO", description: "SUV híbrido y eficiente, con etiqueta ECO y amplio equipamiento." },
    { id: 5, brand: "Volkswagen", model: "Golf", version: "Life 1.5 eTSI", price: 21900, year: 2021, km: 42800, fuel: "Gasolina", transmission: "Automático", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=82", badge: "Gran oportunidad", description: "Versátil y cómodo, con tecnología mild hybrid. Revisado y listo para conducir." },
    { id: 6, brand: "Tesla", model: "Model 3", version: "Standard Range Plus", price: 29900, year: 2022, km: 24800, fuel: "Eléctrico", transmission: "Automático", image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=82", badge: "Cero emisiones", description: "Eléctrico, con buena autonomía y tecnología intuitiva." },
    { id: 7, brand: "SEAT", model: "León", version: "1.5 TSI FR", price: 18900, year: 2020, km: 51700, fuel: "Gasolina", transmission: "Manual", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=82", badge: "Deportivo y ágil", description: "Compacto amplio y ágil, con acabado FR y buen equipamiento." },
    { id: 8, brand: "Volvo", model: "XC40", version: "B3 Core", price: 32700, year: 2023, km: 16800, fuel: "Híbrido", transmission: "Automático", image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=82", badge: "Como nuevo", description: "SUV amplio y seguro, con diseño limpio. Casi nuevo." },
    { id: 9, brand: "Peugeot", model: "e-208", version: "Allure 50 kWh", price: 20900, year: 2022, km: 22100, fuel: "Eléctrico", transmission: "Automático", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=82", badge: "Etiqueta CERO", description: "Eléctrico, ágil y silencioso. Ideal para la ciudad." }
];

const additionalVehicleModels = [
    { brand: "Abarth", basePrice: 16900, models: [["500e", "Eléctrico"], ["595", "Gasolina"], ["695", "Gasolina"], ["124 Spider", "Gasolina"]] },
    { brand: "Alfa Romeo", basePrice: 21900, models: [["Junior", "Híbrido"], ["Giulia", "Gasolina"], ["Stelvio", "Diésel"], ["Tonale", "Híbrido"]] },
    { brand: "Aston Martin", basePrice: 79900, models: [["Vantage", "Gasolina"], ["DB11", "Gasolina"], ["DBX", "Gasolina"], ["DB12", "Gasolina"]] },
    { brand: "Bentley", basePrice: 99900, models: [["Continental GT", "Gasolina"], ["Bentayga", "Híbrido"], ["Flying Spur", "Gasolina"], ["Continental GTC", "Gasolina"]] },
    { brand: "BYD", basePrice: 18900, models: [["Dolphin", "Eléctrico"], ["Atto 3", "Eléctrico"], ["Seal", "Eléctrico"], ["Seal U", "Híbrido"]] },
    { brand: "Citroën", basePrice: 14900, models: [["C3", "Gasolina"], ["C4", "Híbrido"], ["C5 Aircross", "Híbrido"], ["ë-C4", "Eléctrico"]] },
    { brand: "CUPRA", basePrice: 22900, models: [["Formentor", "Híbrido"], ["León", "Híbrido"], ["Born", "Eléctrico"], ["Ateca", "Gasolina"]] },
    { brand: "Dacia", basePrice: 11900, models: [["Sandero", "Gasolina"], ["Duster", "Híbrido"], ["Jogger", "Híbrido"], ["Spring", "Eléctrico"]] },
    { brand: "DS Automobiles", basePrice: 19900, models: [["DS 3", "Híbrido"], ["DS 4", "Híbrido"], ["DS 7", "Híbrido"], ["DS 9", "Híbrido"]] },
    { brand: "Fiat", basePrice: 12900, models: [["500", "Híbrido"], ["Panda", "Gasolina"], ["Tipo", "Gasolina"], ["600e", "Eléctrico"]] },
    { brand: "Ford", basePrice: 15900, models: [["Puma", "Híbrido"], ["Kuga", "Híbrido"], ["Focus", "Gasolina"], ["Mustang Mach-E", "Eléctrico"]] },
    { brand: "Honda", basePrice: 17900, models: [["Civic", "Híbrido"], ["HR-V", "Híbrido"], ["CR-V", "Híbrido"], ["Jazz", "Híbrido"]] },
    { brand: "Hyundai", basePrice: 15900, models: [["Kona", "Híbrido"], ["Tucson", "Híbrido"], ["i20", "Gasolina"], ["IONIQ 5", "Eléctrico"]] },
    { brand: "Jaguar", basePrice: 25900, models: [["F-PACE", "Gasolina"], ["E-PACE", "Diésel"], ["XE", "Gasolina"], ["I-PACE", "Eléctrico"]] },
    { brand: "Jeep", basePrice: 19900, models: [["Avenger", "Eléctrico"], ["Renegade", "Híbrido"], ["Compass", "Híbrido"], ["Wrangler", "Gasolina"]] },
    { brand: "Kia", basePrice: 16900, models: [["Niro", "Híbrido"], ["Sportage", "Híbrido"], ["Ceed", "Gasolina"], ["EV6", "Eléctrico"]] },
    { brand: "Land Rover", basePrice: 29900, models: [["Discovery Sport", "Diésel"], ["Defender", "Diésel"], ["Range Rover Evoque", "Híbrido"], ["Range Rover Velar", "Diésel"]] },
    { brand: "Lexus", basePrice: 25900, models: [["LBX", "Híbrido"], ["UX", "Híbrido"], ["NX", "Híbrido"], ["RX", "Híbrido"]] },
    { brand: "Mazda", basePrice: 16900, models: [["CX-30", "Gasolina"], ["Mazda3", "Gasolina"], ["CX-5", "Diésel"], ["MX-5", "Gasolina"]] },
    { brand: "MINI", basePrice: 17900, models: [["Cooper", "Gasolina"], ["Countryman", "Híbrido"], ["Aceman", "Eléctrico"], ["Clubman", "Gasolina"]] },
    { brand: "Mitsubishi", basePrice: 15900, models: [["ASX", "Híbrido"], ["Eclipse Cross", "Híbrido"], ["Outlander", "Híbrido"], ["Colt", "Gasolina"]] },
    { brand: "Nissan", basePrice: 14900, models: [["Juke", "Híbrido"], ["Qashqai", "Híbrido"], ["X-Trail", "Híbrido"], ["Ariya", "Eléctrico"]] },
    { brand: "Opel", basePrice: 13900, models: [["Corsa", "Gasolina"], ["Mokka", "Eléctrico"], ["Astra", "Híbrido"], ["Grandland", "Híbrido"]] },
    { brand: "Renault", basePrice: 12900, models: [["Clio", "Híbrido"], ["Captur", "Híbrido"], ["Austral", "Híbrido"], ["Mégane E-Tech", "Eléctrico"]] },
    { brand: "Škoda", basePrice: 14900, models: [["Fabia", "Gasolina"], ["Kamiq", "Gasolina"], ["Karoq", "Diésel"], ["Enyaq", "Eléctrico"]] }
];

const stockImages = cars.map(car => car.image);
additionalVehicleModels.forEach((group, brandIndex) => {
    group.models.forEach(([model, fuel], modelIndex) => {
        const id = cars.length + 1;
        const year = 2019 + ((brandIndex + modelIndex) % 6);
        const km = 12000 + ((brandIndex * 7919 + modelIndex * 6421) % 68000);
        const transmission = fuel === "Eléctrico" || fuel === "Híbrido" || (brandIndex + modelIndex) % 2 === 0
            ? "Automático"
            : "Manual";

        cars.push({
            id,
            brand: group.brand,
            model,
            version: "Ocasión",
            price: group.basePrice + modelIndex * 3500,
            year,
            km,
            fuel,
            transmission,
            image: stockImages[(brandIndex * group.models.length + modelIndex) % stockImages.length],
            badge: fuel === "Eléctrico" ? "Eléctrico" : fuel === "Híbrido" ? "Etiqueta ECO" : "Ocasión revisada",
            description: `${model} de ${year}, con motor ${fuel.toLocaleLowerCase("es")} y ${km.toLocaleString("es-ES")} km.`
        });
    });
});

const favoriteIds = new Set();
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const maxPrice = document.getElementById("maxPrice");
const fuelFilter = document.getElementById("fuelFilter");
const sortSelect = document.getElementById("sortSelect");
const carGrid = document.getElementById("carGrid");
const resultsCount = document.getElementById("resultsCount");
const favoriteCount = document.getElementById("favoriteCount");
const money = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("es-ES");
let favoritesOnly = false;
const arrowIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const shieldIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 5 6v5c0 4.4 3 8.5 7 10 4-1.5 7-5.6 7-10V6l-7-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

cars.map(car => car.brand).filter((brand, index, all) => all.indexOf(brand) === index).sort().forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.append(option);
});

function getVisibleCars() {
    const query = searchInput.value.trim().toLocaleLowerCase("es");
    const priceLimit = Number(maxPrice.value) || Infinity;
    const filtered = cars.filter(car => {
        const matchesText = `${car.brand} ${car.model} ${car.version}`.toLocaleLowerCase("es").includes(query);
        return matchesText && (!brandFilter.value || car.brand === brandFilter.value) && car.price <= priceLimit && (!fuelFilter.value || car.fuel === fuelFilter.value) && (!favoritesOnly || favoriteIds.has(car.id));
    });
    if (sortSelect.value === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sortSelect.value === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (sortSelect.value === "year-desc") filtered.sort((a, b) => b.year - a.year);
    return filtered;
}

function renderCars() {
    const visibleCars = getVisibleCars();
    resultsCount.innerHTML = `Mostrando <strong>${visibleCars.length}</strong> de <strong>${cars.length}</strong> coches`;
    if (!visibleCars.length) {
        carGrid.innerHTML = '<div class="empty-state"><strong>No encontramos ese coche</strong><p>Prueba a cambiar los filtros o la búsqueda.</p><button class="button" type="button" data-reset>Ver todos los coches</button></div>';
        return;
    }
    carGrid.innerHTML = visibleCars.map(car => `
        <article class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">
                <span class="badge">${car.badge}</span>
                <button class="heart-button" type="button" data-favorite="${car.id}" aria-label="${favoriteIds.has(car.id) ? "Quitar" : "Añadir"} ${car.brand} ${car.model} ${favoriteIds.has(car.id) ? "de" : "a"} favoritos" aria-pressed="${favoriteIds.has(car.id)}">
                    <svg viewBox="0 0 24 24" fill="${favoriteIds.has(car.id) ? "currentColor" : "none"}" aria-hidden="true"><path d="M20.4 8.8c0 4.4-8.4 10-8.4 10s-8.4-5.6-8.4-10A4.5 4.5 0 0 1 12 6.3a4.5 4.5 0 0 1 8.4 2.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
            <div class="car-info">
                <p class="car-brand">${car.brand} · ${car.version}</p>
                <div class="car-title-row"><h3 class="car-title">${car.model}</h3><span class="car-price">${money.format(car.price)}</span></div>
                <div class="car-specs"><span>${car.year}</span><span>${number.format(car.km)} km</span><span>${car.fuel}</span><span>${car.transmission}</span></div>
                <div class="car-footer"><span class="warranty">${shieldIcon}Garantía incluida</span><button class="details-link" type="button" data-details="${car.id}">Ver detalles ${arrowIcon}</button></div>
            </div>
        </article>`).join("");
}

function updateFavoriteCount() {
    favoriteCount.textContent = favoriteIds.size;
    favoriteCount.setAttribute("aria-label", `${favoriteIds.size} coches favoritos`);
}

let toastTimer;
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function closeModal() {
    document.getElementById("modalBackdrop").classList.remove("open");
}

document.getElementById("searchForm").addEventListener("submit", event => {
    event.preventDefault();
    renderCars();
    document.getElementById("coches").scrollIntoView({ behavior: "smooth", block: "start" });
});
[searchInput, brandFilter, maxPrice, fuelFilter, sortSelect].forEach(input => input.addEventListener("input", renderCars));
document.getElementById("resetFilters").addEventListener("click", () => {
    searchInput.value = "";
    brandFilter.value = "";
    maxPrice.value = "";
    fuelFilter.value = "";
    sortSelect.value = "featured";
    favoritesOnly = false;
    document.querySelector(".favorite-link").querySelector("span:nth-child(2)").textContent = "Favoritos";
    renderCars();
});
carGrid.addEventListener("click", event => {
    const resetButton = event.target.closest("[data-reset]");
    if (resetButton) {
        document.getElementById("resetFilters").click();
        return;
    }
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
        const carId = Number(favoriteButton.dataset.favorite);
        const car = cars.find(item => item.id === carId);
        if (favoriteIds.has(carId)) {
            favoriteIds.delete(carId);
            showToast(`${car.brand} ${car.model} eliminado de favoritos`);
        } else {
            favoriteIds.add(carId);
            showToast(`${car.brand} ${car.model} añadido a favoritos`);
        }
        updateFavoriteCount();
        renderCars();
        return;
    }
    const detailButton = event.target.closest("[data-details]");
    if (detailButton) {
        const car = cars.find(item => item.id === Number(detailButton.dataset.details));
        document.getElementById("modalImage").src = car.image;
        document.getElementById("modalImage").alt = `${car.brand} ${car.model}`;
        document.getElementById("modalContent").innerHTML = `
            <p class="car-brand">${car.brand} · ${car.version}</p>
            <h2 id="modalTitle">${car.model}</h2>
            <div class="modal-price">${money.format(car.price)}</div>
            <p>${car.description}</p>
            <div class="car-specs"><span>${car.year}</span><span>${number.format(car.km)} km</span><span>${car.fuel}</span><span>${car.transmission}</span></div>
            <a class="button" href="mailto:hola@rutamotor.es?subject=${encodeURIComponent(`Me interesa el ${car.brand} ${car.model}`)}">Solicitar información ${arrowIcon}</a>`;
        document.getElementById("modalBackdrop").classList.add("open");
        document.getElementById("modalClose").focus();
    }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", event => {
    if (event.target.id === "modalBackdrop") closeModal();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
});
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Abrir menú" : "Cerrar menú");
    document.getElementById("navLinks").classList.toggle("open", !expanded);
});
document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}));
document.querySelector(".favorite-link").addEventListener("click", event => {
    event.preventDefault();
    favoritesOnly = favoriteIds.size > 0 && !favoritesOnly;
    searchInput.value = "";
    brandFilter.value = "";
    maxPrice.value = "";
    fuelFilter.value = "";
    document.querySelector(".favorite-link").querySelector("span:nth-child(2)").textContent = favoritesOnly ? "Ver todos" : "Favoritos";
    renderCars();
    document.getElementById("coches").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCars();
