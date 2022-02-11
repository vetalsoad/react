const baseUrl = "https://61b1e667c8d4640017aaf049.mockapi.io/api/v1/tasks";

export const createTask = (taskData) => {
  console.log(taskData);
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) => tasksList);

};

export const updateTask = (taskID, taskData) => {
  return fetch(`${baseUrl}/${taskID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};