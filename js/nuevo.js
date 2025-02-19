const btnAgregarStock = document.getElementById("btnAgregarStock");

let arrayStockNombre = [];
let arrayStockMarca = [];
let arrayStockCantidad = [];



btnAgregarStock.addEventListener('click', () => {

    const stockNombre = document.getElementById("stockNombre");
    const stockMarca = document.getElementById("stockMarca");
    const stockCantidad = document.getElementById("stockCantidad");
    const cantidad = parseInt(stockCantidad.value);


    if (stockNombre.value !== "" && stockMarca.value !== "" && stockCantidad.value !== "") {

        let captura = -1;

        for (let i = 0; i < arrayStockNombre.length; i++) {
            if (stockNombre.value == arrayStockNombre[i] && stockMarca.value == arrayStockMarca[i]) {
                captura = i;
            };
        };

        if (captura != -1) {
            arrayStockCantidad[captura] += cantidad;
            stockNombre.value = "";
            stockMarca.value = "";
            stockCantidad.value = "";
        } else {
            arrayStockNombre.push(stockNombre.value);
            arrayStockMarca.push(stockMarca.value);
            arrayStockCantidad.push(cantidad);
            stockNombre.value = "";
            stockMarca.value = "";
            stockCantidad.value = "";
        };

        imprimirTablaStock();
    } else {
        stockNombre.value = "";
        stockMarca.value = "";
        stockCantidad.value = "";
        Swal.fire({
            icon: "error",
            title: "Llenar todos los campos",
            showConfirmButton: false,
            background: "rgba(0, 0, 0, 0.329)",
            color: "white",
        });
    };

    localStorage.setItem("Stocknombe", JSON.stringify(arrayStockNombre));
    localStorage.setItem("Stockmarca", JSON.stringify(arrayStockMarca));
    localStorage.setItem("Stockcantidad", JSON.stringify(arrayStockCantidad));

});

function cargaStock() {
    if (localStorage.getItem("Stocknombe") != null) {
        arrayStockNombre = JSON.parse(localStorage.getItem("Stocknombe"));
        arrayStockMarca = JSON.parse(localStorage.getItem("Stockmarca"));
        arrayStockCantidad = JSON.parse(localStorage.getItem("Stockcantidad"));
        imprimirTablaStock();
    };
};

window.addEventListener("load", cargaStock);

function imprimirTablaStock() {

    const tablaStock = document.getElementById("tablaStock");
    tablaStock.innerHTML = "";

    for (let i = 0; i < arrayStockNombre.length; i++) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= 3; j++) {
            const datosIngresados = document.createElement("td");

            (j == 1) ? datosIngresados.textContent = arrayStockNombre[i] : false;
            (j == 2) ? datosIngresados.textContent = arrayStockMarca[i] : false;
            (j == 3) ? datosIngresados.textContent = arrayStockCantidad[i] : false;

            fila.appendChild(datosIngresados);
        };

        tablaStock.appendChild(fila);

    };

};

const btnRegistrarInstru = document.getElementById("btnRegistrarInstru");

let arrayRegistrarNombreInstru = [];
let arrayRegistrarIdInstru = [];

btnRegistrarInstru.addEventListener('click', () => {

    const registrarNombreInstru = document.getElementById("registrarNombreInstru");
    const registrarIdInstru = document.getElementById("registrarIdInstru");

    if (registrarNombreInstru.value !== "" && registrarIdInstru.value !== "") {

        let captura = -1;

        for (let i = 0; i < arrayRegistrarIdInstru.length; i++) {
            if (registrarIdInstru.value == arrayRegistrarIdInstru[i]) {
                captura = i;
            };

        };

        if (captura != -1) {
            registrarIdInstru.value = "";
            registrarNombreInstru.value = "";
            Swal.fire({
                icon: "error",
                title: "El instructor ya se encuentra registrado",
                showConfirmButton: false,
                background: "rgba(0, 0, 0, 0.329)",
                color: "white",
            });
        } else {
            arrayRegistrarNombreInstru.push(registrarNombreInstru.value);
            arrayRegistrarIdInstru.push(registrarIdInstru.value);
            registrarIdInstru.value = "";
            registrarNombreInstru.value = "";
        };

        imprimirTablaInstru()
    } else {
        registrarIdInstru.value = "";
        registrarNombreInstru.value = "";
        Swal.fire({
            icon: "error",
            title: "Llenar todos los campos",
            showConfirmButton: false,
            background: "rgba(0, 0, 0, 0.329)",
            color: "white",
        });
    };

    localStorage.setItem("Registroinstrunombre", JSON.stringify(arrayRegistrarNombreInstru));
    localStorage.setItem("Registroinstruid", JSON.stringify(arrayRegistrarIdInstru));

});

function cargaInstru() {
    if (localStorage.getItem("Registroinstruid") != null) {
        arrayRegistrarIdInstru = JSON.parse(localStorage.getItem("Registroinstruid"));
        arrayRegistrarNombreInstru = JSON.parse(localStorage.getItem("Registroinstrunombre"));
        imprimirTablaInstru();
    };
};

window.addEventListener("load", cargaInstru);

function imprimirTablaInstru() {

    const tablaInstructores = document.getElementById("tablaInstructores");
    tablaInstructores.innerHTML = "";

    for (let i = 0; i < arrayRegistrarIdInstru.length; i++) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= 2; j++) {
            const datosIngresados = document.createElement("td");

            (j == 1) ? datosIngresados.textContent = arrayRegistrarIdInstru[i] : false;
            (j == 2) ? datosIngresados.textContent = arrayRegistrarNombreInstru[i] : false;

            fila.appendChild(datosIngresados);
        };

        tablaInstructores.appendChild(fila);

    };

};

const btnIngresarPrestamo = document.getElementById("btnIngresarPrestamo");

let arrayPrestamoNombreEquipo = [];
let arrayPrestamoMarcaEquipo = [];
let arrayPrestamoCantidadEquipo = [];
let arrayPrestamoIdInstru = [];

btnIngresarPrestamo.addEventListener('click', () => {

    const prestamoNombreEquipo = document.getElementById("prestamoNombreEquipo");
    const prestamoMarcaEquipo = document.getElementById("prestamoMarcaEquipo");

    if (prestamoNombreEquipo.value !== "" && prestamoMarcaEquipo.value !== "" && prestamoCantidadEquipo.value !== "" && prestamoIdInstru.value !== "") {

        let captura = -1;

        for (let i = 0; i <= arrayStockNombre.length; i++) {
            if (prestamoNombreEquipo.value == arrayStockNombre[i] && prestamoMarcaEquipo.value == arrayStockMarca[i]) {
                captura = i;
            };
        };

        if (captura != -1) {

            const prestamoCantidadEquipo = document.getElementById("prestamoCantidadEquipo");
            const cantidadPrestamo = parseInt(prestamoCantidadEquipo.value);

            if (cantidadPrestamo <= arrayStockCantidad[captura]) {

                const prestamoIdInstru = document.getElementById("prestamoIdInstru");
                let captura1 = -1;

                for (let j = 0; j <= arrayRegistrarIdInstru.length; j++) {
                    if (prestamoIdInstru.value == arrayRegistrarIdInstru[j]) {
                        captura1 = j;
                    };
                };

                if (captura1 != -1) {

                    let captura2 = -1;

                    for (let i = 0; i <= arrayPrestamoNombreEquipo.length; i++) {
                        if (prestamoNombreEquipo.value == arrayPrestamoNombreEquipo[i] && prestamoMarcaEquipo.value == arrayPrestamoMarcaEquipo[i] && prestamoIdInstru.value == arrayPrestamoIdInstru[i]) {
                            captura2 = [i]
                        };
                    };

                    if (captura2 != -1) {
                        arrayPrestamoCantidadEquipo[captura2] += cantidadPrestamo;
                        localStorage.setItem("Prestamocantidad", JSON.stringify(arrayPrestamoCantidadEquipo));

                        prestamoNombreEquipo.value = "";
                        prestamoMarcaEquipo.value = "";
                        prestamoCantidadEquipo.value = "";
                        prestamoIdInstru.value = "";

                    } else {
                        arrayPrestamoNombreEquipo.push(prestamoNombreEquipo.value);
                        arrayPrestamoMarcaEquipo.push(prestamoMarcaEquipo.value);
                        arrayPrestamoCantidadEquipo.push(cantidadPrestamo);
                        arrayPrestamoIdInstru.push(prestamoIdInstru.value);

                        localStorage.setItem("Prestamonombre", JSON.stringify(arrayPrestamoNombreEquipo));
                        localStorage.setItem("Prestamomarca", JSON.stringify(arrayPrestamoMarcaEquipo));
                        localStorage.setItem("Prestamocantidad", JSON.stringify(arrayPrestamoCantidadEquipo));
                        localStorage.setItem("Prestamoidinstru", JSON.stringify(arrayPrestamoIdInstru));

                        prestamoNombreEquipo.value = "";
                        prestamoMarcaEquipo.value = "";
                        prestamoCantidadEquipo.value = "";
                        prestamoIdInstru.value = "";
                    };
                    arrayStockCantidad[captura] -= cantidadPrestamo;
                    localStorage.setItem("Stockcantidad", JSON.stringify(arrayStockCantidad));

                } else {
                    prestamoNombreEquipo.value = "";
                    prestamoMarcaEquipo.value = "";
                    prestamoCantidadEquipo.value = "";
                    prestamoIdInstru.value = "";
                    Swal.fire({
                        icon: "error",
                        title: "El instructor no se encuentra registrado",
                        showConfirmButton: false,
                        background: "rgba(0, 0, 0, 0.329)",
                        color: "white",
                    });
                };



            } else {
                Swal.fire({
                    icon: "error",
                    title: "Cantidad solicitada no disponible",
                    showConfirmButton: false,
                    background: "rgba(0, 0, 0, 0.329)",
                    color: "white",
                });
            };

        } else {
            prestamoNombreEquipo.value = "";
            prestamoMarcaEquipo.value = "";
            prestamoCantidadEquipo.value = "";
            prestamoIdInstru.value = "";
            Swal.fire({
                icon: "error",
                title: "El equipo no existe",
                showConfirmButton: false,
                background: "rgba(0, 0, 0, 0.329)",
                color: "white",
            });
        };

    } else {
        prestamoNombreEquipo.value = "";
        prestamoMarcaEquipo.value = "";
        prestamoCantidadEquipo.value = "";
        prestamoIdInstru.value = "";
        Swal.fire({
            icon: "error",
            title: "Llenar todos los campos",
            showConfirmButton: false,
            background: "rgba(0, 0, 0, 0.329)",
            color: "white",
        });

    };
    imprimirTablaPrestamo();
    imprimirTablaStock();


});

function cargaPrestammo() {
    if (localStorage.getItem("Prestamonombre") != null) {
        arrayPrestamoNombreEquipo = JSON.parse(localStorage.getItem("Prestamonombre"));
        arrayPrestamoMarcaEquipo = JSON.parse(localStorage.getItem("Prestamomarca"));
        arrayPrestamoCantidadEquipo = JSON.parse(localStorage.getItem("Prestamocantidad"));
        arrayPrestamoIdInstru = JSON.parse(localStorage.getItem("Prestamoidinstru"));

        imprimirTablaPrestamo();
    };
};

window.addEventListener("load", cargaPrestammo);

function imprimirTablaPrestamo() {
    const tablaPrestamo = document.getElementById("tablaPrestamo");
    tablaPrestamo.innerHTML = "";

    for (let i = 0; i < arrayPrestamoNombreEquipo.length; i++) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= 4; j++) {
            const datosIngresados = document.createElement("td");

            (j == 1) ? datosIngresados.textContent = arrayPrestamoIdInstru[i] : false;
            (j == 2) ? datosIngresados.textContent = arrayPrestamoNombreEquipo[i] : false;
            (j == 3) ? datosIngresados.textContent = arrayPrestamoMarcaEquipo[i] : false;
            (j == 4) ? datosIngresados.textContent = arrayPrestamoCantidadEquipo[i] : false;


            fila.appendChild(datosIngresados);
        };
        tablaPrestamo.appendChild(fila);
    };
};

const btnDevolverPrestamo = document.getElementById("btnDevolverPrestamo")

const arraydevolverNombreEquipo = [];
const arraydevolverMarcaEquipo = [];
const arraydevolverCantidadEquipo = [];
const arraydevolverIdInstru = [];

btnDevolverPrestamo.addEventListener('click', () => {

    const devolverNombreEquipo = document.getElementById("devolverNombreEquipo");
    const devolverMarcaEquipo = document.getElementById("devolverMarcaEquipo");
    const devolverIdInstru = document.getElementById("devolverIdInstru");

    if (devolverNombreEquipo.value !== "" && devolverMarcaEquipo.value !== "" && devolverIdInstru.value !== "" && devolverCantidadEquipo.value !== "") {
        let captura = -1;

        for (let i = 0; i < arrayPrestamoNombreEquipo.length; i++) {
            if (devolverNombreEquipo.value == arrayPrestamoNombreEquipo[i] && devolverMarcaEquipo.value == arrayPrestamoMarcaEquipo[i] && devolverIdInstru.value == arrayPrestamoIdInstru[i]) {
                captura = i;
            };
        };

        if (captura != -1) {
            const devolverCantidadEquipo = document.getElementById("devolverCantidadEquipo");
            const cantidadDevuelta = parseInt(devolverCantidadEquipo.value);

            if (cantidadDevuelta <= arrayPrestamoCantidadEquipo[captura]) {
                arrayPrestamoCantidadEquipo[captura] -= cantidadDevuelta
                localStorage.setItem("Prestamocantidad", JSON.stringify(arrayPrestamoCantidadEquipo));


                console.log(arrayPrestamoCantidadEquipo[captura]);

                arraydevolverNombreEquipo.push(devolverNombreEquipo.value);
                arraydevolverMarcaEquipo.push(devolverMarcaEquipo.value);
                arraydevolverCantidadEquipo.push(cantidadDevuelta);
                arraydevolverIdInstru.push(devolverIdInstru.value);

                localStorage.setItem("devolvermonombre", JSON.stringify(arraydevolverNombreEquipo));
                localStorage.setItem("devolvermomarca", JSON.stringify(arraydevolverMarcaEquipo));
                localStorage.setItem("devolvermocantidad", JSON.stringify(arraydevolverCantidadEquipo));
                localStorage.setItem("devolvermoidinstru", JSON.stringify(arraydevolverIdInstru));

                devolverNombreEquipo.value = "";
                devolverMarcaEquipo.value = "";
                devolverCantidadEquipo.value = "";
                devolverIdInstru.value = "";

                for (let i = 0; i < arrayStockNombre.length; i++) {
                    if (arraydevolverNombreEquipo[captura] == arrayStockNombre[i] && arraydevolverMarcaEquipo[captura] == arrayStockMarca[i]) {
                        arrayStockCantidad[captura] += cantidadDevuelta;
                        localStorage.setItem("Stockcantidad", JSON.stringify(arrayStockCantidad));

                    };
                };

                if (arrayPrestamoCantidadEquipo[captura] == 0) {
                    arrayPrestamoIdInstru.splice(captura, 1);
                    arrayPrestamoNombreEquipo.splice(captura, 1);
                    arrayPrestamoMarcaEquipo.splice(captura, 1);
                    arrayPrestamoCantidadEquipo.splice(captura, 1);

                    devolverNombreEquipo.value = "";
                    devolverMarcaEquipo.value = "";
                    devolverCantidadEquipo.value = "";
                    devolverIdInstru.value = "";

                    localStorage.setItem("Prestamonombre",JSON.stringify(arrayPrestamoNombreEquipo));
                    localStorage.setItem("Prestamomarca",JSON.stringify(arrayPrestamoMarcaEquipo));
                    localStorage.setItem("Prestamocantidad",JSON.stringify(arrayPrestamoCantidadEquipo));
                    localStorage.setItem("Prestamoidinstru",JSON.stringify(arrayPrestamoIdInstru));

                };

            } else {
                devolverNombreEquipo.value = "";
                devolverMarcaEquipo.value = "";
                devolverCantidadEquipo.value = "";
                devolverIdInstru.value = "";

                Swal.fire({
                    icon: "error",
                    title: "La cantidad ingresada supera lo prestado",
                    showConfirmButton: false,
                    background: "rgba(0, 0, 0, 0.329)",
                    color: "white",
                });
            };

        } else {
            devolverNombreEquipo.value = "";
            devolverMarcaEquipo.value = "";
            devolverCantidadEquipo.value = "";
            devolverIdInstru.value = "";

            Swal.fire({
                icon: "error",
                title: "No hay prestamos registrados con estos datos",
                showConfirmButton: false,
                background: "rgba(0, 0, 0, 0.329)",
                color: "white",
            });
        };
    } else {
        devolverNombreEquipo.value = "";
        devolverMarcaEquipo.value = "";
        devolverCantidadEquipo.value = "";
        devolverIdInstru.value = "";
        Swal.fire({
            icon: "error",
            title: "Llenar todos los campos",
            showConfirmButton: false,
            background: "rgba(0, 0, 0, 0.329)",
            color: "white",
        });
    };
    imprimirTablaPrestamo();
    imprimirTablaStock();

});

function datosDevolucion(){
    if (localStorage.getItem("devolvermonombre") != null) {
        arraydevolverNombreEquipo = JSON.parse(localStorage.getItem("Devolvernombre"));
        arraydevolverMarcaEquipo = JSON.parse(localStorage.getItem("Devolvermarca"));
        arraydevolverCantidadEquipo = JSON.parse(localStorage.getItem("Devolvercantidad"));
        arraydevolverIdInstru = JSON.parse(localStorage.getItem("Devolverinstru"));
    };
};

window.addEventListener("load", datosDevolucion);
