
    class ViewSDKClient {
      constructor();
      ready(): Promise<void>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      previewFile(divId: string, viewerConfig: any, pdfUrl: string): void;
    }
    export default ViewSDKClient;
