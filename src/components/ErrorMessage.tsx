import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface ErrorMessageProps {
  errorMessage: string;
  errorTitle: string;
}
export default function ErrorMessage(props: ErrorMessageProps) {
  const { errorMessage, errorTitle } = props;
  return (
    <>
      {errorMessage && errorTitle && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>{errorTitle}</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </>
  );
}
