import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';
// utils
import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const URL = endpoints.kanban;

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export function useGetBoard() {
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, options);

  const memoizedValue = useMemo(
    () => ({
      board: data?.board,
      boardLoading: isLoading,
      boardError: error,
      boardValidating: isValidating,
      boardEmpty: !isLoading && !data?.board.ordered.length,
    }),
    [data?.board, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export async function createColumn(columnData) {
  /**
   * Work on server
   */
  // const data = { columnData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'create-column' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      const columns = {
        ...board.columns,
        // add new column in board.columns
        [columnData.id]: columnData,
      };

      // add new column in board.ordered
      const ordered = [...board.ordered, columnData.id];

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          ordered,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function updateColumn(columnId, columnName) {
  /**
   * Work on server
   */
  // const data = { columnId, columnName };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'update-column' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        // update column in board.columns
        [column.id]: {
          ...column,
          name: columnName,
        },
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function moveColumn(newOrdered) {
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      // update ordered in board.ordered
      const ordered = newOrdered;

      return {
        ...currentData,
        board: {
          ...board,
          ordered,
        },
      };
    },
    false
  );

  /**
   * Work on server
   */
  // const data = { newOrdered };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'move-column' } });
}

// ----------------------------------------------------------------------

export async function clearColumn(columnId) {
  /**
   * Work on server
   */
  // const data = { columnId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'clear-column' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      const { tasks } = board;

      // current column
      const column = board.columns[columnId];

      // delete tasks in board.tasks
      column.taskIds.forEach((key) => {
        delete tasks[key];
      });

      const columns = {
        ...board.columns,
        [column.id]: {
          ...column,
          // delete task in column
          taskIds: [],
        },
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function deleteColumn(columnId) {
  /**
   * Work on server
   */
  // const data = { columnId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'delete-column' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      const { columns, tasks } = board;

      // current column
      const column = columns[columnId];

      // delete column in board.columns
      delete columns[columnId];

      // delete tasks in board.tasks
      column.taskIds.forEach((key) => {
        delete tasks[key];
      });

      // delete column in board.ordered
      const ordered = board.ordered.filter((id) => id !== columnId);

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
          ordered,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function createTask(columnId, taskData) {
  /**
   * Work on server
   */
  // const data = { columnId, taskData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'create-task' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        [columnId]: {
          ...column,
          // add task in column
          taskIds: [...column.taskIds, taskData.id],
        },
      };

      // add task in board.tasks
      const tasks = {
        ...board.tasks,
        [taskData.id]: taskData,
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function updateTask(taskData) {
  /**
   * Work on server
   */
  // const data = { taskData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'update-task' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      const tasks = {
        ...board.tasks,
        // add task in board.tasks
        [taskData.id]: taskData,
      };

      return {
        ...currentData,
        board: {
          ...board,
          tasks,
        },
      };
    },
    false
  );
}

// ----------------------------------------------------------------------

export async function moveTask(updateColumns) {
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      // update board.columns
      const columns = updateColumns;

      return {
        ...currentData,
        board: {
          ...board,
          columns,
        },
      };
    },
    false
  );

  /**
   * Work on server
   */
  // const data = { updateColumns };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'move-task' } });
}

// ----------------------------------------------------------------------

export async function deleteTask(columnId, taskId) {
  /**
   * Work on server
   */
  // const data = { columnId, taskId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'delete-task' } });

  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData) => {
      const { board } = currentData;

      const { tasks } = board;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        [column.id]: {
          ...column,
          // delete tasks in column
          taskIds: column.taskIds.filter((id) => id !== taskId),
        },
      };

      // delete tasks in board.tasks
      delete tasks[taskId];

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };
    },
    false
  );
}
