<template>
  <div class="main">
    <add-activity v-on:add-new="add($event)"></add-activity>
    <div class="timeline-wrapper">
      <timeline
        v-for="(activity, index) in sortedActivities"
        :activity="activity"
        :is-latest="index === 0"
        :key="index"
      ></timeline>
    </div>
  </div>
</template>

<script>
import { activities } from "./lib/datasource";

import Timeline from "./components/Timeline.vue";
import AddActivity from "./components/AddActivity.vue";

export default {
  name: "App",
  components: { Timeline, AddActivity },
  data() {
    return {
      allActivities: activities,
    };
  },
  computed: {
    sortedActivities() {
      return this.allActivities.sort((a, b) => {
        return b.date - a.date;
      });
    },
  },

  methods: {
    add(activity) {
      this.allActivities.push(activity);
    },
    all() {
      return this.allActivities;
    },
    get(id) {
      return this.allActivities.find((activity) => activity.id === id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}

.main {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 40px;
}

@media screen and (max-width: 600px) {
  .main {
    width: 95%;
    margin: 0 auto;
  }

  body {
    font-size: 14px;
  }
}
</style>
