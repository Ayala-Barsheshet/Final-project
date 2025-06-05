import {
    serviceGetAllTodos,
    serviceAddTodo,
    serviceUpdateTodo,
    serviceDeleteTodo,
} from "../service/Todos.js";

export const getAllTodos = async (req, res) => {
    try {
        const { userId } = req.query;
        const todos = await serviceGetAllTodos(userId);
        if (!todos || todos.length === 0)
            return res.status(200).json([]);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addTodo = async (req, res) => {
    try {
        const { userId, title, completed } = req.body;
        const newTodo = await serviceAddTodo(userId, title, completed);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFields = req.body;
        const updatedTodo = await serviceUpdateTodo(id, updatedFields);

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await serviceDeleteTodo(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

