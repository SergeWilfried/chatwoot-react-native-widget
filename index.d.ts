declare module '@capsule/react-native-widget' {
  import React from 'react';

  export interface CapsuleWidgetProps {
    websiteToken: string;
    locale?: string;
    baseUrl: string;
    colorScheme?: 'light' | 'auto' | 'dark';
    closeModal: () => void;
    isModalVisible: boolean;
    user?: {
      identifier?: string;
      name?: string;
      avatar_url?: string;
      email?: string;
      identifier_hash?: string;
    };
    // This can actually be any object
    customAttributes?: Record<string, unknown>;
  }

  class CapsuleWidget extends React.Component<CapsuleWidgetProps, any> {}
  export default CapsuleWidget;
}
