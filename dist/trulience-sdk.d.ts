declare module 'trulience-sdk' {
  
  export interface TrulienceAvatarProps {
    url: string | undefined;
    avatarId: string;
    token?: string | undefined;
    eventCallbacks?: { [event: string]: (eventData: any) => void };
    width?: string | number;
    height?: string | number;
    backgroundColor?: string; // If we need to add more style properties, we should add a styles object.
  }

  export class TrulienceAvatar extends React.Component<TrulienceAvatarProps> {
    getTrulienceObject(): any;
    startAvatarSession(): void;
    stopAvatarSession(reason: string): void;
    setMediaStream(mediaStream: MediaStream | null): void;
    sendMessage(message: string): void;
    render() : React.JSX.Element
  }

  interface InitSDKDetails {
    avatarId: string;
    token?: string | null;
    username?: string;
    enableAvatar?: boolean;
    retry?: boolean;
    videoElements: { [elementName: string]: string } | null;
    eventCallbacks?: { [event: string]: (eventData: any) => void };
  }
  export class TrulienceSDK {
    // Method to initialize the SDK
    initSDK(url: string, details: InitSDKDetails): Promise<any>;
  
    // Method to check if SDK is initialized
    isInitialized(): boolean;
  }
}
