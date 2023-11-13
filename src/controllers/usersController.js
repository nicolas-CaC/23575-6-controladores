export class Controller {

    constructor() { }

    getController(req, res) {
        res.render('users')
    }

    postController(req, res) {
        res.send('POST User')
    }
}
