interface Window {
  Telegram?: {
    WebApp: {
      initDataUnsafe: {
        user: any;
        [key: string]: any;
      };
      setHeaderColor: (color: string) => void;
      MainButton: {
        setText: (text: string) => void;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
      };
      close: () => void;
      [key: string]: any;
    };
  };
}