import BlurIn from "./components/magicui/blur-in";
import { TodoList } from "./components/todo-list";
import { HeroHighlight } from "./components/ui/hero-highlight";

function App() {
  return (
    <HeroHighlight>
      <div className="flex flex-col gap-10 py-10 min-h-[95vh]">
        <BlurIn word="My TODO List 📝 ✅" className="text-slate-700" />
        <TodoList />
      </div>
      <a href="https://66kesara99.github.io/">
        <div className="text-center py-2">by Kesara Gamlath</div>
      </a>
    </HeroHighlight>
  );
}

export default App;
