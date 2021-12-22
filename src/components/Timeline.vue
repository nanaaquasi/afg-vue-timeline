<template>
  <div class="timeline">
    <div class="container right">
      <div :class="['circle-icon', latest]">
        <i :class="['icon', iconClass, active]" id="icon"></i>
      </div>
      <div class="content">
        <p class="activity">
          <strong>{{ activity.initiator }}</strong>
          {{ activity.action }}
          <strong>{{ activity.user }}</strong>
          {{ activity.activity }}
          <strong>{{ activity.position }}</strong>
        </p>
        <timeago
          class="timestamp"
          :datetime="activity.date"
          :auto-update="60"
        ></timeago>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Timeline",
  props: {
    activity: Object,
    isLatest: Boolean,
  },
  methods: {},
  computed: {
    iconClass() {
      switch (this.activity.action) {
        case "added":
          return "fas fa-plus";
        case "updated":
          return "fas fa-pen";
        case "joined":
          return "fas fa-user";
        case "requested":
          return "fas fa-user-check";
        case "started":
          return "fas fa-play";
        default:
          return "";
      }
    },
    latest() {
      return this.isLatest ? "latest" : "all";
    },
    active() {
      return this.isLatest ? "active" : "inactive";
    },
  },
};
</script>
<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.latest {
  background-color: #4a9ff4 !important;
}

.all {
  background-color: #e8e8e8;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: #e8e8e8;
  top: 0;
  bottom: 0;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  display: flex;
}

.circle-icon {
  position: absolute;
  width: 35px;
  height: 35px;
  left: -15px;
  top: 20px;
  border-radius: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}

.active {
  color: white;
}

.inactive {
  color: #858585;
}

.icon {
  font-size: 12px;
}
.content {
  position: relative;
  display: flex;
  align-items: center;
}

.timestamp {
  margin-left: 3px;
  color: grey;
  font-size: 13px;
}

.activity {
  margin-right: 5px;
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .timeline {
    max-width: 600px;
    padding-left: 20px;
  }
  .container {
    width: 100%;
    padding-left: 40px;
    padding-right: 25px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }
}
</style>
