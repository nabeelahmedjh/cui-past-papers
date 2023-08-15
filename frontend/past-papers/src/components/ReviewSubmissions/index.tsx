import PdfViewer from "./PdfViewer";

export default function ReviewSubmissions() {

  const url: string = `https://hilo.hawaii.edu/campuscenter/hohonu/volumes/documents/ThePositiveImpactsofFairyTalesforChildrenLeilaniVisikoKnox-Johnson.pdf`

    return (
        <>
            <PdfViewer url={url}/>
        </>
    )
}