import objSrc from "../../assets/essay.pdf"

interface PdfViewerProps  {
    pdfUrl: string
}

export default function PdfViewer({pdfUrl} : PdfViewerProps ) {


    const src: string = `https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`
    return (
        <div className="lg:mr-8 lg:mb-8 w-full lg:w-1/2">
            <object data={objSrc} type="application/pdf" className="w-full  h-[35rem] lg:h-[60rem] border-4">
                <div className="flex justify-center pb-1"><a href={pdfUrl} className=" text-xl ">Download PDF</a></div>
            <embed src={src} className="w-full h-[33rem] lg:h-[60rem]" />
            </object>
        </div>
    )
}

