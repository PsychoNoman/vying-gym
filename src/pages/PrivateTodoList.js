import React, { useState, useEffect } from "react";
import { Button, Text, Textarea, Stack, Input } from "@mui/material";

export default function PrivateTodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };

  return (
    <div
      style={{ padding: "5px", margin: "auto", width: "76%" }}
      className="container row"
    >
      <h1 className="mt-3 text-white">Exercises to do</h1>
      <Stack className="col-8">
        <Input
          name="task"
          type="text"
          value={task}
          placeholder="Write your daily [scheduled] exercises..."
          className="form-control"
          autoComplete="off"
          onChange={(e) => setTask(e.target.value)}
          style={{ width: "400px" }}
        />
      </Stack>

      <Stack className="col-4">
        <Button
          variant="outlined"
          className="btn btn-primary form-control material-icons"
          style={{
            width: "10px",
            margin: "5px",
            height: "20px",
            padding: "0px",
          }}
          onClick={addTask}
        >
          add
        </Button>
      </Stack>
      <Stack className="badge">
        You have
        {!tasks.length
          ? " no exercises to do"
          : tasks.length === 1
          ? " 1 exercise"
          : tasks.length > 1
          ? ` ${tasks.length} exercises`
          : null}
      </Stack>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <Stack className="col-11">
            <span
              className="form-control bg-white btn mt-2"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "17px",
              }}
            >
              <input
                style={{ margin: "3px", textAlign: "center" }}
                type="checkbox"
                id="isItChecked"
              ></input>
              {task.title}{" "}
              <Button
                className=" mt-2 btn btn-warning material-icons"
                style={{
                  width: "10px",
                  margin: "5px",
                  height: "20px",
                  padding: "0px",
                  color: "red",
                  display: "inlineBlock",
                  verticalAlign: "middle",
                  transform: "translateX(-10px)",
                }}
                variant="outlined"
                onClick={() => handleDelete(task)}
              >
                delete
              </Button>
            </span>
          </Stack>
        </React.Fragment>
      ))}
      {!tasks.length ? null : (
        <Stack>
          <Button
            variant="outlined"
            style={{
              margin: "5px",
              width: "10px",
              color: "red",
              padding: "0px",
            }}
            className="btn btn-secondary  mt-4 mb-4"
            onClick={() => handleClear()}
          >
            Clear all
          </Button>
        </Stack>
      )}
    </div>
  );
}
