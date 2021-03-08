"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAnnualSales = exports.getAnnualSales = exports.getBookTopSales = exports.salesRevenueByYearAndMonth = exports.salesRevenueFromYear = exports.countSalesFromMonth = exports.countSalesFromYear = exports.getSalesByCustomerId = exports.getLastIdSale = exports.createSale = void 0;
// pool es la conexion a db tmb se puede llamar db en vez de pool
// en consola poner npm run dev (para iniciar el servidor?)
const database_1 = require("../database");
exports.createSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // En mi sales.routes, la router.post('router.post('/sales/create', no recibe ningun parametro por url, sino que recibe todos los datos por el body, por esta razon se evalua como !req.body.id_user etc..
    // si por ejemplo tengo la ruta /user/:name, entonces la propidad "name" se evalúa como !req.params.name y no como !req.body.name
    // pregunto si recibe valores null o undefined en el cuerpo
    if (!req.body.id_user || !req.body.total_price || !req.body.date) {
        res.status(400).send("FALTA CONTENIDO EN EL CUERPO");
    }
    //recibo los datos (de un form, insomnia rest, etc..)
    const { id_user, total_price, date } = req.body;
    console.log(id_user, total_price, date);
    // el id_sale en la db es autonumerico no hace falta
    let idUser = parseInt(id_user);
    let totalPrice = total_price;
    try {
        const response = yield database_1.pool.query("INSERT INTO sales (id_user, total_price, date) VALUES ($1, $2, $3)", [idUser, totalPrice, date]);
        return res.json({
            message: "La venta ah sido creada exitosamente!",
            body: {
                sales: {
                    idUser,
                    totalPrice,
                    date,
                },
            },
        });
    }
    catch (e) {
        console.log(e);
        return res
            .status(500)
            .json("Error, no se pudo insertar la venta en la base de datos");
    }
});
exports.getLastIdSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('select max(id_sale) as "lastIdSale" from sales');
        return res.status(200).json(response.rows[0]); // rows[0] porque va a devolver un solo valor
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
exports.getSalesByCustomerId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("select * from sales where id_user = $1", [req.params.id_user]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve la "cantidad de ventas" de un año prticular.
exports.countSalesFromYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año",
        });
    }
    let year = req.params.year.toString();
    try {
        const a = 'select count(id_sale) as "total" from sales';
        const b = " where extract(year from date) = $1";
        const response = yield database_1.pool.query(a + b, [year]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve la "cantidad de ventas" mes y año elegidos.
exports.countSalesFromMonth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year || !req.params.month) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año o mes",
        });
    }
    let year = req.params.year.toString();
    let month = req.params.month.toString();
    try {
        const a = 'select count(id_sale) as "total" from sales';
        const b = " where extract(year from date) = $1";
        const c = " and extract(month from date) = $2";
        const response = yield database_1.pool.query(a + b + c, [year, month]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve la "recaudación/ingreso" de un año particular.
exports.salesRevenueFromYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año",
        });
    }
    let year = req.params.year.toString();
    try {
        const a = 'select sum(total_price) as "total" from sales';
        const b = " where extract(year from date) = $1";
        const response = yield database_1.pool.query(a + b, [year]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve la "recaudación/ingreso" de mes y año elegidos.
exports.salesRevenueByYearAndMonth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year || !req.params.month) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año o mes",
        });
    }
    let year = req.params.year.toString();
    let month = req.params.month.toString();
    try {
        const a = 'select sum(total_price) as "total" from sales';
        const b = " where extract(year from date) = $1";
        const c = " and extract(month from date) = $2";
        const response = yield database_1.pool.query(a + b + c, [year, month]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve 10 o menos (dependiendo del resultado) libros mas vendidos cuya cantidad de ventas es igual o superior a 5.
exports.getBookTopSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const a = 'select books.name, sum(sales_detail.quantity) as "vendidos" from sales_detail';
    const b = " inner join books";
    const c = " on books.id_book = sales_detail.id_book";
    const d = " group by (sales_detail.id_book, books.id_book)";
    const e = " having sum(sales_detail.quantity) >= 5";
    const f = " order by 2 desc";
    const g = " limit 10";
    try {
        const response = yield database_1.pool.query(a + b + c + d + e + f + g);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve el monto total de ventas de cada mes de un año particular
exports.getAnnualSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año",
        });
    }
    const year = parseInt(req.params.year);
    const a = "select";
    const b = " case";
    const c = ` when date_part('month', date) = 1 then 'Enero'`;
    const d = ` when date_part('month', date) = 2 then 'Febrero'`;
    const e = ` when date_part('month', date) = 3 then 'Marzo'`;
    const f = ` when date_part('month', date) = 4 then 'Abril'`;
    const g = ` when date_part('month', date) = 5 then 'Mayo'`;
    const h = ` when date_part('month', date) = 6 then 'Junio'`;
    const i = ` when date_part('month', date) = 7 then 'Julio'`;
    const j = ` when date_part('month', date) = 8 then 'Agosto'`;
    const k = ` when date_part('month', date) = 9 then 'Septiembre'`;
    const l = ` when date_part('month', date) = 10 then 'Octubre'`;
    const m = ` when date_part('month', date) = 11 then 'Noviembre'`;
    const n = ` Else 'Diciembre'`;
    const o = " End as Mes,";
    const p = " sum(total_price) as total";
    const q = " from Sales";
    const r = ` where date_part('year', date) = ${year}`;
    const s = ` group by date_part('month', date)`;
    const t = " order by 1";
    try {
        const response = yield database_1.pool.query(a +
            b +
            c +
            d +
            e +
            f +
            g +
            h +
            i +
            j +
            k +
            l +
            m +
            n +
            o +
            p +
            q +
            r +
            s +
            t);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
// devuelve el promedio de ventas de un año particular
exports.getAverageAnnualSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.year) {
        return res.status(400).send({
            message: "FALTA CONTENIDO EN EL CUERPO, falta el año para calcular elpromedio",
        });
    }
    const year = parseInt(req.params.year);
    const a = "select";
    const b = " case";
    const c = ` when date_part('month', date) = 1 then 'Enero'`;
    const d = ` when date_part('month', date) = 2 then 'Febrero'`;
    const e = ` when date_part('month', date) = 3 then 'Marzo'`;
    const f = ` when date_part('month', date) = 4 then 'Abril'`;
    const g = ` when date_part('month', date) = 5 then 'Mayo'`;
    const h = ` when date_part('month', date) = 6 then 'Junio'`;
    const i = ` when date_part('month', date) = 7 then 'Julio'`;
    const j = ` when date_part('month', date) = 8 then 'Agosto'`;
    const k = ` when date_part('month', date) = 9 then 'Septiembre'`;
    const l = ` when date_part('month', date) = 10 then 'Octubre'`;
    const m = ` when date_part('month', date) = 11 then 'Noviembre'`;
    const n = ` Else 'Diciembre'`;
    const o = " End as Mes,";
    const p = " ROUND(avg(total_price)::numeric, 2) as promedio";
    const q = " from Sales";
    const r = ` where date_part('year', date) = ${year}`;
    const s = ` group by date_part('month', date)`;
    const t = " order by 1";
    try {
        const response = yield database_1.pool.query(a +
            b +
            c +
            d +
            e +
            f +
            g +
            h +
            i +
            j +
            k +
            l +
            m +
            n +
            o +
            p +
            q +
            r +
            s +
            t);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
});
