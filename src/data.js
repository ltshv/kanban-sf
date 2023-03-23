// export const dataMock = [
//       {
//         id: "1235",
//         name: "Sprint bugfix 1",
//         description: "Fix all the bugs 2",
//         status: "backlog",
//       },
//       {
//         id: "156464",
//         name: "Sprint bugfix 2",
//         description: "Fix all the bugs 2",
//         status: "ready",
//       },
//       {
//         id: "146547",
//         name: "Sprint bugfix 3",
//         description: "Fix all the bugs 3",
//         status: "ready",
//       },
//       {
//         id: "12475",
//         name: "Sprint bugfix 1",
//         description: "Fix all the bugs 2",
//         status: "finished",
//       },
//       {
//         id: "14574",
//         name: "Sprint bugfix 2",
//         description: "Fix all the bugs 2",
//         status: "backlog",
//       },
//       {
//         id: "146547",
//         name: "Sprint bugfix 3",
//         description: "Fix all the bugs 3",
//         status: "inProgress",
//       },
//       {
//         id: "12457",
//         name: "Sprint bugfix 1",
//         description: "Fix all the bugs 2",
//         status: "finished",
//       },
//       {
//         id: "14547",
//         name: "Sprint bugfix 2",
//         description: "Fix all the bugs 2",
//         status: "ready",
//       },
//       {
//         id: "12364",
//         name: "Sprint bugfix 1",
//         description: "Fix all the bugs 2",
//         status: "finished",
//       },
//       {
//         id: "147867",
//         name: "Sprint bugfix 2",
//         description: "Fix all the bugs 2",
//         status: "backlog",
//       },
//       {
//         id: "14634",
//         name: "Sprint bugfix 3",
//         description: "Fix all the bugs 3",
//         status: "inProgress",
//       },
//     ]

const LOCAL_NAME = "kanbanTasks";

export const isLocalData =
  localStorage.getItem(LOCAL_NAME) !== undefined ||
  localStorage.getItem(LOCAL_NAME) !== null ||
  localStorage.getItem(LOCAL_NAME).length > 0;

export const getLocalTasks = () => {
  return JSON.parse(window.localStorage.getItem(LOCAL_NAME));
} 

export const setLocalTasks = (value) => {
  return window.localStorage.setItem(LOCAL_NAME, JSON.stringify(value));
}