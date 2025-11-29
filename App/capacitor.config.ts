import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'tech.nirogya.app',
  appName: 'nirogya',
  webDir: 'out',
  server: {
    // Load the app from your Vercel deployment
    // This way the app runs from Vercel (with working API routes)
    // but still has access to native features through Capacitor
    url: 'https://m-app-livid.vercel.app',
    androidScheme: 'https',
    iosScheme: 'https',
    // Allow cleartext for development (remove in production)
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#83C818',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      iosSpinnerStyle: 'small',
      spinnerColor: '#ffffff',
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#83C818',
    },
    Camera: {
      permissions: ['camera', 'microphone', 'photos'],
    },
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
  },
};

export default config;
