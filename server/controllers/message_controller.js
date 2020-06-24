let messages = [
];

let id = 0;

module.exports = {
    create: (req, res) => {
        let newMessage = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        id++;
        messages.push(newMessage);
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        messages[index].text = req.body.text;
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        if (index !== -1) {
            messages.splice(index, 1);
        }
        res.status(200).send(messages);
    }
}