import Vue from "vue";
import VueRouter from "vue-router";
import Profession from "../views/Profession.vue";
import Hobby from "../views/Hobby.vue";
import Person from "../views/Person.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/profession",
        name: "Profession",
        component: Profession,
    },
    {
        path: "/hobby",
        name: "Hobby",
        component: Hobby,
    },
    {
        path: "/person",
        name: "person",
        component: Person,
    },
];

const router = new VueRouter({
    routes,
});

export default router;