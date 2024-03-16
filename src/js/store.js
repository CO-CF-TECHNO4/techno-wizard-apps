
import { createStore } from 'techno4';

const store = createStore({
  state: {
    projects: [],
    frienship: [],
    messages: [],
    currentProject: {
      id: "",
      git: "",
      version: "",
      ownerID: "",
      basedOnID: "",
      status: "",
      complaints: "",
      timestamp: "",
      filetype: "",
      filename: "",
      data: ""
    },
    user: {
      email: "",
      firstName: "",
      id: "",
      joomlaID: "",
      lastName: "",
      role: "",
      status: "",
      userPublicAddress: ""
    },
    settings: {
      savedUserPublicAddress: localStorage.getItem("savedUserPublicAddress"),
      savedUserSecret: localStorage.getItem("savedUserSecret")
    }
  },
  getters: {
    projects({ state }) {
      return state.projects
    },
    frienship({ state }) {
      return state.frienship
    },
    messages({ state }) {
      return state.messages
    },
    currentProject({ state }) {
      return state.currentProject
    },
    user({ state }) {
      return state.user
    },
    settings({ state }) {
      return state.settings
    }
  },
  actions: {
    addProjects({ state }, projects) {
      state.projects = [...state.projects, projects]
    },
    addFrienship({ state }, frienship) {
      state.frienship = [...frienship]
    },
    addMessages({ state }, messages) {
      state.messages = [...state.messages, messages]
    },
    addCurrentProject({ state }, currentProject) {
      state.currentProject = [...state.currentProject, currentProject]
    },
    addUser({ state }, user) {
      state.user = { ...user }
    },
    addSettings({ state }, settings) {
      state.settings = [...state.settings, settings]
    },
  },
})
export default store;
