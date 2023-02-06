declare module '*.png';
declare module '*.svg';
declare module '*.jpg';

type ToastType = import('react-native-fast-toast').ToastType;

declare global {
  const toast: ToastType;
}

declare let toast: ToastType;
