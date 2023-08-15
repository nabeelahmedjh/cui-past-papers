import PdfViewer from "./PdfViewer";
import ReviewForm from "./ReviewForm";

export default function ReviewSubmissions() {

  const url: string = `https://hilo.hawaii.edu/campuscenter/hohonu/volumes/documents/ThePositiveImpactsofFairyTalesforChildrenLeilaniVisikoKnox-Johnson.pdf`

    return (
        <>
            <div className="lg:flex lg:gap-20 lg:justify-end ">
            <ReviewForm />
            <PdfViewer pdfUrl={url}/>
            </div>
        </>
    )
}