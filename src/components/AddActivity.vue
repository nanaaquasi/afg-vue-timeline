<template>
  <div class="container">
    <h1>Add New Activity</h1>
    <form @submit="submitForm">
      <div class="form-group">
        <label for="initiator">Initiator</label>
        <input
          type="text"
          v-model="initiator"
          placeholder="Name"
          name="initiator"
        />
      </div>
      <div class="form-group">
        <label for="initiator">Action</label>
        <select v-model="action" @change="setFields">
          <option selected>Select Action</option>
          <option value="added">Added</option>
          <option value="updated">Updated</option>
          <option value="joined">Joined</option>
          <option value="requested">Requested</option>
          <option value="started">Started</option>
        </select>
      </div>
      <div
        class="form-group"
        v-if="
          action === 'added' || action === 'started' || action === 'updated'
        "
      >
        <label for="initiator">Activity</label>
        <input
          type="text"
          v-model="activity"
          placeholder="Title"
          name="initiator"
        />
      </div>
      <div class="form-group" v-if="action === 'requested'">
        <label for="initiator">User</label>
        <input
          type="text"
          v-model="user"
          placeholder="Title"
          name="initiator"
        />
      </div>
      <div
        class="form-group"
        v-if="action === 'requested' || action === 'joined'"
      >
        <label for="initiator">Position</label>
        <input
          type="text"
          v-model="position"
          placeholder="Title"
          name="initiator"
        />
      </div>
      <!-- <div class="form-group">
      <label for="initiator">Initiator</label>
      <input
        type="text"
        v-model="initiator"
        placeholder="Title"
        name="initiator"
      />
    </div> -->
      <button>Add</button>
    </form>
    <hr />
  </div>
</template>
<script>
export default {
  name: "AddActivity",
  data() {
    return {
      initiator: "",
      action: "Select Action",
      activity: "",
      user: "",
      position: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$emit("add-new", {
        initiator: this.initiator,
        action: this.action,
        activity: this.activity,
        date: new Date(),
        user: this.user,
        position: this.position,
      });
      this.initiator = "";
      this.action = "Select Action";
      this.activity = "";
      this.user = "";
      this.position = "";
    },
    setFields() {
      switch (this.action) {
        case "joined":
          this.position = "";
          this.activity = "mission as a";
          break;
        case "requested":
          this.activity = "to join mission as a";
          break;
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0 30px 0;
  border-bottom: 2px solid rgba(128, 128, 128, 0.288);
}
.form-group {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

label {
  margin-bottom: 5px;
}

form {
  width: 80%;
  display: flex;
  margin: 10px auto;
  align-items: flex-end;
  justify-content: center;
}

input {
  width: 200px;
  border: 2px solid #340f79;
  outline: none;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: white;
}

button {
  width: 200px;
  height: auto;
  padding: 12px 20px;
  border: none;
  outline: none;
  background-color: #340f79;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
}

select {
  width: 200px;
  border: 2px solid #340f79;
  outline: none;
  padding: 10px 10px;
  font-size: 1rem;
}

select:focus,
select:active {
  background-color: white;
}
</style>
