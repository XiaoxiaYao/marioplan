const initState = {
  projects: [
    { id: "1", title: "Help1", content: "sdfdsfsdfsdf" },
    { id: "2", title: "Help2", content: "sdfdsfsdfsdf" },
    { id: "3", title: "Help3", content: "sdfdsfsdfsdf" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      break;
    default:
  }
  return state;
};

export default projectReducer;
