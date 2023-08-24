import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function SuccessAlert() {
  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent className="max-sm:w-[80%]">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-green-500">
            Success
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your submission is sent for approval.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:w-[15%]">
          <AlertDialogAction
            onClick={() => {
              window.location.reload();
            }}
          >
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
