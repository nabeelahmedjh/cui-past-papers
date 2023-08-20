import ViewSDKClient from "../../../ViewSDKClient";

const AdobePdf = ({
  url,
  name,
  email,
}: {
  url: string;
  name: string;
  email: string;
}) => {
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
    <>
      <div className="lg:mr-8 mb-8  w-full lg:w-[70%]">
        <h1 className=" text-center mb-2 text-xl">
          {name && email && `Submitted by ${name} (${email})`}
        </h1>
        <div
          id="pdf-div"
          className="w-full h-[33rem] lg:h-[95%] "
          onDocumentLoad={loadPDF()}
        ></div>
      </div>
    </>
  );
};
export default AdobePdf;
