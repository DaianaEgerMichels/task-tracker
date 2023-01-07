import { InjectionKey } from "vue";
import { createStore } from "vuex";
import IProject from "./../interfaces/IProject";

interface State {
  projects: IProject[];
}

//chave de acesso store
export const key : InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [
        {
            id: new Date().toISOString(),
            name: "Typescript",
        },
        {
            id: new Date().toISOString(),
            name: "Vue",
        },
        {
            id: new Date().toISOString(),
            name: "Vuex",
        },
    ],
  },
});
