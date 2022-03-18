import { v4 as uuidv4 } from 'uuid';

let users = [];
export const getUsers = (req, res) => {
    res.send(users);

}
export const createUser = (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    });

    res.send(`User created with name ${user.firstName}`);
    console.log(users);
}
export const getUser = (req, res) => {
    console.log(users);
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    res.send(`Deleted user with id ${id}`)
    users = users.filter((user) => user.id != id)

}
export const updateUser = (req, res) => {
    const match = users.find(x => x.id === req.params.id);
    for (var key in req.body) {
        match[key] = req.body[key];
    }
    res.send(`The ${match.firstName} value has been updated !`);
}