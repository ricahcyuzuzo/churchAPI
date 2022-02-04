module.exports = (req, res) => {
    if(req.method === 'GET'){
        res.json({
            message: 'Welcome to Church api',
            code: 200,
        })
    }
}