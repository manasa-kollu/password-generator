import s from "./style.module.css";

import PasswordGeneratorCard from "./components/PasswordGeneratorCard/PasswordGeneratorCard";

function App() {
  return (
    <div className={s.container}>
      <PasswordGeneratorCard />
    </div>
  );
}

export default App;
