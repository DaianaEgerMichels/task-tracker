<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label"> Project Name: </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ADD_PROJECT, EDIT_PROJECT} from "@/store/type-mutations";
import { TypeNotification } from "@/interfaces/INotification";
import useNotifier from "@/hook/notifier"

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (proj) => proj.id == this.id
      );
      this.projectName = project?.name || "";
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit(EDIT_PROJECT, {
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.store.commit(ADD_PROJECT, this.projectName);
      }
      this.projectName = "";
        this.notify(TypeNotification.SUCCESS, 'Success', 'Successfully registered project :)')
      this.$router.push("/projects");
    },    
  },
  setup() {
    const store = useStore();
    const {notify} = useNotifier();
    return {
      store,
      notify
    };
  },
});
</script>
