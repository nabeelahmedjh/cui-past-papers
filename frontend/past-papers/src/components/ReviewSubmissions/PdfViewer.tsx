

interface PdfViewerProps  {
    url: string
}

export default function PdfViewer({url} : PdfViewerProps ) {


    const src: string = `https://docs.google.com/viewer?url=${url}&embedded=true`
    return (
        <div className="lg:flex lg:gap-20 lg:justify-end lg:mr-8 lg:my-8">
            <h1 className="text-4xl mb-4 lg:mb-0 ">FORM</h1>
            <iframe src={src} className="w-full lg:w-1/2 h-[30rem] lg:h-[60rem] border-4"  />
        </div>
    )
}
