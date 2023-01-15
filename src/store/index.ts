import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IProject from "./../interfaces/IProject";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from "./type-mutations";

interface State {
  projects: IProject[];
}

//chave de acesso store
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
  },
  mutations: {
    [ADD_PROJECT](state, nameProject: string) {
      const project = {
        id: new Date().toISOString(),
        name: nameProject,
      } as IProject;

      state.projects.push(project);
    },
    [EDIT_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex((proj) => proj.id == project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(proj => proj.id != id)
    }
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
