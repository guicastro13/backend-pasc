
const  express  = require("express");
const router = express.Router()
const multer = require("multer") ;
const multerConfig = multer()


const PrecosCombustiveis = require('../controller/PrecosCombustiveisContoller')

router.post('/upload', multerConfig.single('file') , PrecosCombustiveis.upload)
router.get('/upload', PrecosCombustiveis.show)
router.post('/export', PrecosCombustiveis.export)
router.get('/download', PrecosCombustiveis.download)

module.exports = router; 