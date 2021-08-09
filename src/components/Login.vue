<template>
  <a @click="user.name ? logout() : login()" href="javascript:void(0)">
    {{ user.name ? `hello: ${user.name} - Logout` : "Login" }}
  </a>
</template>

<script>
// ipc login
import { HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

import { fetchLoginInfo } from "@/api/index";
import { reactive, ref } from "vue";

export default {
  setup() {
    let authClient = reactive({});

    (async () => {
      authClient = await AuthClient.create();

      if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
      }
    })();

    let user = ref({});

    const handleAuthenticated = async (client) => {
      try {
        const identity = client.getIdentity();
        const agent = new HttpAgent({ identity, host: "https://ic0.app" });
        const principal = await agent.getPrincipal();

        const resp = await fetchLoginInfo(principal.toHex().toLowerCase());

        user.value = {
          name: resp.data.Name,
        };
      } catch (err) {
        user.value = {
          name: "Anonymous",
        };
      }
    };

    const login = async () => {
      authClient.login({
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1e9), // one week
        onSuccess: () => handleAuthenticated(authClient),
      });
    };

    const logout = async () => {
      await authClient.logout();
      user.value = {};
    };

    return {
      user,
      login,
      logout,
    };
  },
};
</script>