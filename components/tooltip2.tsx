import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Tooltip2 = ({trigger, content}: {trigger: string, content: string}) => {
  return (
    <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>{trigger}</TooltipTrigger>
    <TooltipContent>
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
  );
}

export default Tooltip2;