const getController = (req, res) => {
    let nombre
    if (req.query.nombre === '1')
        res.render('productos', {
            mensaje: `Que onda Carlos`
        })
    else
        res.render('productos', { mensaje: 'No te conozco' })
}

const postController = (req, res) => {
    res.send('POST')
}

const controller = {
    getController,
    postController
}

export default controller