import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function FailedAlert({ message }) {
  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent className=" w-[80%]">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-red-500">Failed</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:w-[15%]">
          <AlertDialogAction
          // onClick={() => {
          //   window.location.reload();
          // }}
          >
            Retry
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
