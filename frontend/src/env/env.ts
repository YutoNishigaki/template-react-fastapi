import { envStringToBoolean } from "./typeConversion";

interface EnvVariables {
  VITE_DISABLE_MSW: boolean;
}

class EnvConfig {
  private static instance: EnvConfig;
  private envVariables: EnvVariables;

  private constructor() {
    this.envVariables = {} as EnvVariables;
    this.loadEnv();
  }

  private loadEnv() {
    try {
      this.envVariables = {
        VITE_DISABLE_MSW: envStringToBoolean(import.meta.env.VITE_DISABLE_MSW),
      };
    } catch (e) {
      console.error(e);
    }
  }

  public static getInstance(): EnvConfig {
    if (!EnvConfig.instance) {
      EnvConfig.instance = new EnvConfig();
    }
    return EnvConfig.instance;
  }

  public getValue(key: keyof EnvVariables) {
    return this.envVariables[key];
  }
}

const Env = EnvConfig.getInstance();

export default Env;
