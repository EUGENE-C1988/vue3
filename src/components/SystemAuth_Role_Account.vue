<template>
  <header>
    <Header />
  </header>
  <div>
    <h3>Role Setting</h3>
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
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col col="2">
                <v-btn
                  prepend-icon="mdi-plus-thick"
                  variant="tonal"
                  @click="addRole()"
                  v-if="showButton"
                >
                  ADD </v-btn
                >&nbsp;
                <v-btn
                  prepend-icon="mdi-content-save"
                  variant="tonal"
                  @click="saveRole()"
                  v-if="showButton"
                >
                  Save </v-btn
                >&nbsp;
                <v-btn
                  prepend-icon="mdi-delete"
                  variant="tonal"
                  @click="deleteRole()"
                  v-if="showButton"
                >
                  Delete </v-btn
                >&nbsp;
                <v-btn
                  prepend-icon="mdi-cancel"
                  variant="tonal"
                  @click="cancel()"
                  v-if="showButton"
                >
                  Cancel
                </v-btn></v-col
              >
            </v-row>
          </v-container> </v-card
        ><br />
        <v-card class="mx-auto">
          <v-list density="compact">
            <v-list-item-group>
              <v-list-item
                v-for="item in allRoles"
                :key="item.guid"
                :value="item.value"
                color="primary"
                @click="clickRole(item)"
              >
                <v-list-item-content>
                  <v-container>
                    <v-row>
                      <v-col cols="9">
                        <v-list-item-title
                          v-text="item.roleName"
                        ></v-list-item-title>
                      </v-col>
                      <v-clo cols="3">
                        <v-btn
                          icon="mdi-pencil"
                          @click="modifyRole(item)"
                        ></v-btn>
                      </v-clo>
                    </v-row>
                    <v-row>
                      <v-list-item-subtitle>{{
                        item.roleDesc
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
import { SystemRoleStore } from "@/store/SystemRoleStore";

//Retrieve jwt
const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = SystemRoleStore();
store.getRolesAction(jwtHeadder);
const allRoles = computed(() => store.getAllRoles);

//vuetify data table
const showButton = ref(true);
const editRole = reactive({ name: "", desc: "" });
const allUser = ref(["John", "Jacob", "Tony"]);
const selectedUsers = ref([]);
const selectedRole = ref("");

// const allRoles = ref([
//   {
//     roleName: "Item #1",
//     roleDesc: 1,
//   },
//   {
//     roleName: "Item #2",
//     roleDesc: 2,
//   },
//   {
//     roleName: "Item #3",
//     roleDesc: 3,
//   },
//   {
//     roleName: "Item #4",
//     roleDesc: 4,
//   },
//   {
//     roleName: "Item #5",
//     roleDesc: 5,
//   },
// ]);

//Display selected role's accounts
function clickRole(selectedItem) {
  alert(selectedItem.guid);
  editRole.name = selectedItem.roleName;
  editRole.desc = selectedItem.roleDesc;
  //selectedUsers.value = [];
  //showButton.value = !showButton.value;
  //alert(selectedRole);

  //selected.value.push("John");
}

function updateUser() {
  alert(selectedRole);
}

function deleteRole(selectedItem) {
  const aa = "Delete selected role";
  alert(aa);
}

//
function modifyRole(selectedItem) {}

function addRole() {
  allRoles.value.push({
    title: "abcd",
    value: 12345,
  });
  alert(allRoles);
}

function saveRole(selectedItem) {
  const aa = "Save selected role";
  alert(aa);
}

function cancel() {}
</script>

<style lang="scss" scoped></style>
