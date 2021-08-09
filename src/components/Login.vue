<template>
  <div class="dfinity">
    <a @click="login">Login</a>
  </div>
</template>

<script>
// ipc login
import { HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

export default {
  setup() {
    const login =async () => {
      const authClient = await AuthClient.create();

      authClient.login({
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1e9), // one week
        onSuccess: async () => {
          const identity = authClient.getIdentity();

          const agent = new HttpAgent({ identity, host: "https://ic0.app" });

          const principal = await agent.getPrincipal();
          
          const principalId = principal.toHex().toLowerCase();
          const signature = (
            await identity.sign(principal.toUint8Array())
          ).toString("hex");
          const publicKey = identity._inner._publicKey.rawKey.toString("hex");

          console.log(`auth: ${principalId}.${signature}.${publicKey}`);

          console.log("principal:", principal);
        },
      });
    };

    return {
      login,
    };
  },
};
</script>