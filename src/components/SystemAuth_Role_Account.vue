<template>
  <header>
    <Header />
  </header>
  <div>
    <h3>SystemAuth</h3>
    <div class="row">
      <div class="col-sm-8">
        <v-card class="mx-auto">
          <v-container>
            <v-row
              ><v-col col="5"
                ><v-text-field
                  clearable
                  label="Role Name"
                  variant="solo"
                  v-model="editRole.name"
                ></v-text-field
              ></v-col>
              <v-col col="5"
                ><v-text-field
                  clearable
                  label="Description"
                  variant="solo"
                  v-model="editRole.desc"
                ></v-text-field></v-col
              ><v-col col="2">
                <v-btn
                  prepend-icon="mdi-plus-thick"
                  variant="tonal"
                  @click="addRole()"
                  v-if="!showButton"
                >
                  ADD
                </v-btn>
                <v-btn
                  prepend-icon="mdi-content-save"
                  variant="tonal"
                  @click="saveRole()"
                  v-if="showButton"
                >
                  Save
                </v-btn></v-col
              ></v-row
            >
          </v-container> </v-card
        ><br />
        <v-card class="mx-auto">
          <v-list density="compact">
            <v-list-item-group>
              <v-list-item
                v-for="item in allRole"
                :key="item.value"
                :value="item.value"
                color="primary"
                @click="clickRole(item.value)"
              >
                <v-list-item-content>
                  <v-container>
                    <v-row>
                      <v-col cols="9">
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>
                      </v-col>
                      <v-clo cols="3">
                        <v-btn
                          icon="mdi-pencil"
                          @click="modifyRole(item)"
                        ></v-btn
                        >&nbsp
                        <v-btn
                          icon="mdi-delete"
                          @click="deleteRole(item)"
                        ></v-btn>
                      </v-clo>
                    </v-row>
                    <v-row>
                      <v-list-item-subtitle>{{
                        item.value
                      }}</v-list-item-subtitle>
                    </v-row>
                  </v-container>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group></v-list
          >
        </v-card>
      </div>

      <div class="col-sm-4">
        <v-card class="mx-auto" max-width="600">
          <p>{{ selectedUsers }}</p>
          <v-checkbox-btn
            v-for="userItem in allUser"
            :key="userItem"
            v-model="selectedUsers"
            :label="userItem"
            :value="userItem"
            @click="updateUser()"
          ></v-checkbox-btn>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import { reactive, ref, computed } from "vue";
import { userUserInfoStore } from "@/store/UserInfoStore";
import { SystemAuthStore } from "@/store/SystemAuthStore";

//Retrieve jwt
const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = SystemAuthStore();
store.getRoleAuthAction(jwtHeadder);
const getAllRole = computed(() => store.getAllRole);

//vuetify data table
const showButton = ref(false);
const editRole = reactive({ name: "", desc: "" });
const allUser = ref(["John", "Jacob", "Tony"]);
const selectedUsers = ref([]);
const selectedRole = ref("");
const allRole = [
  {
    title: "Item #1",
    value: 1,
  },
  {
    title: "Item #2",
    value: 2,
  },
  {
    title: "Item #3",
    value: 3,
  },
  {
    title: "Item #4",
    value: 4,
  },
  {
    title: "Item #5",
    value: 5,
  },
];

function clickRole(s) {
  selectedRole.value = s.value;
  selectedUsers.value = [];
  showButton.value = !showButton.value;
  //alert(selectedRole);
  //selected.value.push("John");
}

function updateUser() {
  alert(selectedRole);
}

function deleteRole(role) {
  alert(role);
}

function modifyRole(selectedItem) {
  alert(selectedItem.title);
  editRole.name = selectedItem.title;
  editRole.desc = selectedItem.value;
}

function addRole() {}

function saveRole() {}
</script>

<style lang="scss" scoped></style>
