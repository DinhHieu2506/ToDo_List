import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "./TodosSlice";
import { Card, Button, Tag, Space, Modal, message } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const checkTaskInLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return localTasks.find((t) => t.id === task.id);
  };

  const handleToggle = () => {
    const foundTask = checkTaskInLocal();
    if (!foundTask) {
      message.error(`Task "${task.title}" not found.`);

      return;
    }
    const nextStatus = !foundTask.completed ? "completed" : "pending";
    dispatch(toggleTask(task.id));
    message.success(`Task "${task.title}" marked as ${nextStatus}.`);
  };

  const handleDelete = () => {
    const foundTask = checkTaskInLocal();
    if (!foundTask) {
      message.error(`Task "${task.title}" was already deleted.`);

      return;
    }

    Modal.confirm({
      title: "Do you want to delete this task?",
      content: `"${task.title}" will be permanently removed.`,
      okText: "Yes",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        dispatch(deleteTask(task.id));
        message.success(`Task "${task.title}" deleted successfully.`);
      },
    });
  };

  return (
    <div>
      <Card
        size="small"
        title={
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.title}
          </span>
        }
        extra={
          <Tag color={task.completed ? "green" : "blue"}>
            {task.completed ? "Completed" : "Pending"}
          </Tag>
        }
        className={`shadow hover:shadow-lg transition-all ${
          task.completed ? "border-green-400" : "border-blue-400"
        }`}
      >
        <p
          className={`mb-2 ${
            task.completed ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {task.description || "No description"}
        </p>
        <div className="flex justify-between items-center">
          <small className="text-gray-400">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </small>
          <Space>
            <Button
              type={task.completed ? "default" : "primary"}
              onClick={handleToggle}
            >
              <CheckOutlined />
            </Button>
            <Button danger onClick={handleDelete}>
              <DeleteOutlined />
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default TodoItem;
