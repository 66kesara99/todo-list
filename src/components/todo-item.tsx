import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export interface Todo {
  id: string;
  description: string;
  isDone: boolean;
}

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
};

export const TodoItem = ({ todo, onCheck, onDelete }: Props) => {
  return (
    <div
      className={cn(
        "relative mx-auto min-h-fit min-w-[200px] w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex gap-4 justify-between items-center text-lg font-medium dark:text-white">
        <div
          className="flex items-center gap-3 flex-1"
          onClick={() => onCheck(todo.id)}
        >
          <Checkbox checked={todo.isDone} />
          <span
            className={cn(
              "text-sm sm:text-lg",
              todo.isDone ? "line-through" : ""
            )}
          >
            {todo.description}
          </span>
        </div>

        <button onClick={() => onDelete(todo.id)} className="flex w-6 h-6">
          <XIcon className="bg-red-500 rounded-md text-white" />
        </button>
      </div>
    </div>
  );
};
