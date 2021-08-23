import { Actor, HttpAgent } from "@dfinity/agent";
import  IDL  from './gameidl.js';

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./idl.js/index.js")._SERVICE>}
 */
 export const createActor = (canisterId,options) => {
  const agent = new HttpAgent({ ...options?.agentOptions });
  //local get key
  // if(process.env.NODE_ENV !== "production") {
    // agent.fetchRootKey().catch(err=>{
    //   console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
    //   console.error(err);
    // });
  // }
  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(IDL, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};