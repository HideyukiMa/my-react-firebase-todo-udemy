import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button, Table } from "reactstrap";

function TodoList() {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext);
  return (
    <Table>
      <tbody>
        {todos &&
          todos.map((todo, index) => (
            <tr key={index}>
              <th
                className="text-right"
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.text}
              </th>
              <td className="text-left">
                <Button
                  color={todo.complete ? "secondary" : "success"}
                  className="m-2"
                  onClick={() => completeTodo(index)}
                >
                  {todo.complete ? "完了" : "未完了"}
                </Button>
                <Button color="danger" onClick={() => removeTodo(index)}>
                  削除
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TodoList;
