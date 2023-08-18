import ViewSDKClient from "../../../ViewSDKClient";

const AdobePdf = ({ url }: { url: string }) => {
  const loadPDF = () => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        "pdf-div",
        {
          defaultViewMode: "IN_LINE",
          showAnnotationTools: true,
          showLeftHandPanel: true,
          showPageControls: true,
          showDownloadPDF: true,
          showPrintPDF: true,
        },
        url
      );
    });
  };
  return (
    <div className="lg:mr-8 mb-8  w-full lg:w-[70%] border-4">
      <div
        id="pdf-div"
        className="w-full h-[33rem] lg:h-full"
        onDocumentLoad={loadPDF()}
      ></div>
    </div>
  );
};
export default AdobePdf;
