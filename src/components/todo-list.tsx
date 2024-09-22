"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo, TodoItem } from "./todo-item";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const placeholders = [
  "Pay credit card",
  "Pay telephone bill",
  "Clean the room",
  "Check emails",
];

export function TodoList({ className }: { className?: string }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initialTodos = localStorage.getItem("todos") ?? "[]";
    setTodos(JSON.parse(initialTodos));
  }, []);

  const saveTodos = (todos: Todo[]) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onClickDelete = (id: string) => {
    saveTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheck = (id: string) => {
    saveTodos(
      todos.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item
      )
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.currentTarget.elements[0] as HTMLInputElement).value;

    saveTodos([
      ...todos,
      {
        id: uuidv4(),
        description: value,
        isDone: false,
      },
    ]);
  };

  console.log(todos);

  return (
    <div
      className={cn(
        "relative flex min-h-[500px] w-full min-w-[300px] flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl gap-6",
        className
      )}
    >
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={() => {}}
        onSubmit={onSubmit}
      />
      <h2>TODO</h2>
      <AnimatedList>
        {todos
          .filter((item) => !item.isDone)
          .map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDelete={onClickDelete}
              onCheck={onCheck}
            />
          ))}
      </AnimatedList>
      <h2>Completed</h2>
      <AnimatedList>
        {todos
          .filter((item) => item.isDone)
          .map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDelete={onClickDelete}
              onCheck={onCheck}
            />
          ))}
      </AnimatedList>
    </div>
  );
}
