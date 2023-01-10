import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IProject from "./../interfaces/IProject";

interface State {
  projects: IProject[];
}

//chave de acesso store
export const key : InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [],
  },
  mutations: {
    'ADD_PROJECT'(state, nameProject: string) {
        const project = {
          id: new Date().toISOString(),
          name: nameProject
        } as IProject

        state.projects.push(project)
    }
  }
});


export function useStore(): Store<State>  {
  return vuexUseStore(key);
}
