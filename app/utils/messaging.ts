// Utility functions for extension messaging

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

interface ExtensionConnection {
  port: chrome.runtime.Port | null;
  connected: boolean;
  error: Error | null;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const setupMessageListener = (callback: (event: MessageEvent) => void) => {
  const handler = (event: MessageEvent) => {
    try {
      // Only process messages from our extension
      if (event.source === window && event.data && event.data.type) {
        callback(event);
      }
    } catch (error) {
      console.warn('Error handling message:', error);
    }
  };

  window.addEventListener('message', handler);
  return () => window.removeEventListener('message', handler);
};

export const connectToExtension = async (extensionId?: string): Promise<ExtensionConnection> => {
  let retries = 0;
  
  while (retries < MAX_RETRIES) {
    try {
      if (typeof chrome === 'undefined' || !chrome.runtime) {
        throw new Error('Chrome runtime not available');
      }

      // Wait for runtime to be ready
      await delay(RETRY_DELAY);
      
      const port = extensionId ? 
        chrome.runtime.connect(extensionId) : 
        chrome.runtime.connect();

      return {
        port,
        connected: true,
        error: null
      };
    } catch (error) {
      retries++;
      console.warn(`Failed to connect to extension (attempt ${retries}/${MAX_RETRIES}):`, error);
      
      if (retries === MAX_RETRIES) {
        return {
          port: null,
          connected: false,
          error: error instanceof Error ? error : new Error('Failed to connect to extension')
        };
      }
      
      await delay(RETRY_DELAY);
    }
  }

  return {
    port: null,
    connected: false,
    error: new Error('Max retries exceeded')
  };
};
