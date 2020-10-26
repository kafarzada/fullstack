// для загрузки файлов устанавливаем 2 пакета (multer moment )
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'uploads/')
    },
    filename(req, file, callback) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        callback(null, `${date}-${file.originalname}`)
    }
})

//filter files
const fileFilter = (req, file, callback) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

//лимирируем размер картинки
const limits = {
    fileSize: 1024 * 1024 * 5
}

//напшем базовую конфигурацию
module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
})