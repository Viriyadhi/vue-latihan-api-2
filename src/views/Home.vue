<template>
  <v-app align="center" class="py-16 px-6">
    <h1>MY CRUD</h1>
    <h1>{{ id }}</h1>
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="calories"
      class="mx-16 mt-6"
      align="center"
    >
      <template v-slot:top>
        <v-row class="mb-6 mx-0" justify="center" align="center">
          <form @submit.prevent="add">
            <input type="hidden" v-model="form.id" />
            <input
              type="text"
              v-model="form.name"
              placeholder="Type Anything"
            />
            <button class="button-1" type="submit" v-show="!updateSubmit">
              Create
            </button>
          </form>
        </v-row>
      </template>

      <template v-slot:item.actions="{ user }">
        <v-row justify="space-around">
          <v-btn
            class="pa-0 red mr-5"
            @click="del(user.id)"
            min-width="40"
            min-height="40"
            v-bind:disabled="buttons"
          >
            <v-icon color="white" size="20">mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-table>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "DataTower",

  data: () => ({
    buttons: true,
    result: null,
    updateSubmit: false,
    users: [],
    headers: [
      {
        text: "ID",
        align: "center",
        value: "id",
      },

      {
        text: "Name",
        value: "name",
        sortable: false,
        align: "center",
      },
      {
        text: "Actions",
        value: "actions",
        sortable: false,
        align: "center",
      },
    ],

    form: {
      id: "",
      name: "",
    },
  }),

  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("https://frontend.idaman.co.id/api/profession")
        .then((res) => {
          this.users = res.data.data;
          this.result = res.data.meta.message;
          setTimeout(() => {
            this.buttons = false;
          }, 800);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios
        .post("https://frontend.idaman.co.id/api/profession", this.form)
        .then(() => {
          this.load();
          this.form.name = "";
        });
    },

    del(user) {
      axios
        .delete("https://frontend.idaman.co.id/api/profession/" + user)
        .then(() => {
          this.load();
        });
    },
  },
};
</script>

<style scoped>
h4,
h2 {
  font-weight: 500;
}

h2 {
  color: black;
}

.span-class {
  font-weight: 600 !important;
}

button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;

  display: inline-block;
  font-size: 16px;
  margin: 1rem;
  cursor: pointer;
  border-radius: 0.5em;
}
.button-1 {
  margin: auto !important;
}
.button-2 {
  background-color: #f44336;
  margin: 0 1.8rem 0 1.8rem;
}
input[type="text"],
select {
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="text"]:focus {
  border: 3px solid #555;
}
</style>

<style>
.v-data-table__wrapper {
  background-color: #fff3f3 !important;
}

th {
  border: 1px solid black !important;
  border-left: 0px !important;
  border-bottom: 0px !important;
  width: 20%;
  padding: 1.8rem 0 1.8rem 0 !important;
  color: black !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
}

th:first-child {
  border: 1px solid black !important;
  border-bottom: 0px !important;
  border-radius: 10px 0px 0px 0px;
}

th:last-child {
  border: 1px solid black !important;
  border-left: 0px !important;
  border-bottom: 0px !important;
  border-radius: 0px 10px 0px 0px;
  width: 20%;
}

td {
  border: 1px solid black !important;
  border-left: 0px !important;
  border-bottom: 0px !important;
}

td:first-child {
  border: 1px solid black !important;
  border-bottom: 0px !important;
}

td:last-child {
  border: 1px solid black !important;
  border-left: 0px !important;
  border-bottom: 0px !important;
  padding: 1.8rem 0 1.8rem 0 !important;
}

tr:last-child td {
  border-bottom: 1px solid black !important;
}

tr:last-child td:first-child,
tr:last-child td:first-child:hover {
  border-radius: 0 0 0 10px !important;
}

tr:last-child td:last-child,
tr:last-child td:last-child:hover {
  border-radius: 0 0 10px 0 !important;
}
</style>
