const {Router} = require("express");
const auth= require("../middlewares/books.auth")
const { route } = require("express/lib/application");

const {getBooks,deleteBook} = require("../controllers/booksController")


const router =Router();

router.route("/books").get(auth, getBooks)
router.delete("/book/:title", deleteBook)


module.exports =router