<template>
  <v-app align="center" class="py-16 px-6">
    <h1>MY CRUD</h1>
    <p>{{ result }}.</p>
    <v-row class="mt-6 mb-6 mx-0" justify="center" align="center">
      <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" />
        <input type="text" v-model="form.name" placeholder="Type Anything" />
        <button class="button-1 primary" type="submit" v-show="!updateSubmit">
          Create
        </button>
        <button type="button" v-show="updateSubmit" @click="update(form)">
          Update
        </button>
      </form>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="calories"
      class="mx-16 mt-6"
      align="center"
    >
      <template v-slot:item.actions="{ item }">
        <v-row justify="space-around">
          <v-btn
            class="pa-0 primary mr-5"
            @click="edit(item)"
            min-width="40"
            min-height="40"
          >
            <v-icon color="white" size="20">mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            class="pa-0 red mr-5"
            @click="del(item)"
            min-width="40"
            min-height="40"
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
  data: () => ({
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
    async load() {
      try {
        const res = await axios.get(
          "https://frontend.idaman.co.id/api/profession/"
        );
        this.users = res.data.data;
        this.result = res.data.meta.message;
        this.buttons = false;
      } catch (err) {
        console.log(err);
      }
    },
    async add() {
      try {
        await axios.post(
          "https://frontend.idaman.co.id/api/profession/",
          this.form
        );
        await this.load();
        this.form.name = "";
      } catch (err) {
        console.log(err);
      }
    },

    async del(user) {
      console.log(user);
      try {
        const res = await axios.delete(
          "https://frontend.idaman.co.id/api/profession/" + user.id
        );
        console.log(res);
        await this.load();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
button {
  color: white;
  padding: 15px 32px;
  font-size: 1rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 0.5em;
}

input[type="text"],
select {
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.5em;
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
