import { createServer, Model } from "miragejs";

export const setupServer = () => {
  createServer({
    models: {
      todo: Model,
    },
    routes() {
      this.get("/api/todo", (schema) => {
        return schema.todo.all();
      });

      this.post("/api/todo", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        const database = schema.todo.create(payload);
  
        return schema.todo.create(payload);
      });

      this.post("/api/updateTodo", (schema, request) => {
        const id = JSON.parse(request.requestBody);

        const currentTodo = schema.todo.find(id);
        currentTodo.update({ completed: !currentTodo.completed });
        return currentTodo;
      });
    },
  });
};
