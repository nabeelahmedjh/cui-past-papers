import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons";

import { useState, useEffect } from "react";

export default function ConfirmDialogue({
  handleDeclineAndDelete,
  isDialogueOpen,
  isDeclining,
  isSubmitting,
}: {
  handleDeclineAndDelete: () => Promise<void>;
  isDialogueOpen: boolean;
  isDeclining: boolean;
  isSubmitting: boolean;
}) {
  const [open, setOpen] = useState(false);
  // console.log("Dialogue open: ", open);

  useEffect(() => {
    // console.log("isDialogueOpen from useeffect", isDialogueOpen);
    if (isDialogueOpen) {
      // console.log("dialogue use effect");
      setOpen(false);
    }
  }, [isDialogueOpen]);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button disabled={isSubmitting} type="button" variant="destructive">
            Decline
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              submission from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeclining}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              asChild
            >
              <Button
                disabled={isDeclining}
                type="button"
                variant="destructive"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeclineAndDelete();
                }}
              >
                Decline{" "}
                {isDeclining && (
                  <IconContext.Provider
                    value={{
                      size: "1.25rem",
                      className: "ml-1 animate-spin",
                    }}
                  >
                    <CgSpinner />
                  </IconContext.Provider>
                )}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
