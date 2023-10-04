import { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient";

function AdobePDF({ url }: { url: string }) {
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      viewSDKClient.previewFile(
        "pdf-div",
        {
          /* Pass the embed mode option here */
          embedMode: "IN_LINE",
        },
        url
      );
      // console.log(url);
    });
  }, [url]);

  return <div id="pdf-div" className="w-full h-[33rem] lg:h-[95%]"></div>;
}

export default AdobePDF;
