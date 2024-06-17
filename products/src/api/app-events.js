const ProductService = require('../services/product-service')

// With the help of this other service will be able to call our Customer service with this web-hook.

module.exports = (app) => {

    const service = new ProductService

    app.use('/app-events', async (req, res, next) => {
        try {
            
            const { payload } = req.body

            console.log("-----Product service recieved events-----");

            return res.status(200).json(payload)

        } catch (error) {
            throw error
        }
    })
}