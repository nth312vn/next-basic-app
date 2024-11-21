import { LoaderCircle } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

export interface LoadingButtonProps extends Partial<ButtonProps> {
  loading: boolean;
}
export default function LoadingButton(props: LoadingButtonProps) {
  const { loading, onClick, children, ...rest } = props;
  return (
    <Button disabled={loading} {...rest}>
      {loading && <LoaderCircle className=" h-4 w-4 animate-spin text-white" />}
      {children}
    </Button>
  );
}
