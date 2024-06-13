import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hello-world',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.31.175:3000",
    cleartext: true,
  }
};

export default config;
