import imgUno from "./assets/images/img-1.jpg";
import Button from "./components/Button";
import WelcomeText from "./components/WelcomeText";
import ShowFruts from "./components/fruts/ShowFruts";

const App = () => {
  let contador = 1;
  const pathImg = imgUno;
  const classTitle = "center";
  const user = true;
  const fruts = ["🍐", "🍌", "🍎"];
  const frutsTwo = ["🍊", "🥥", "🥭"];

  return (
    <>
      <h1 className="center">Hola</h1>
      <img src={pathImg} alt="nothinToSay" className={classTitle} />
      <WelcomeText user={user} />
      <Button text={"I'm button " + contador++} />
      <Button text={"I'm button " + contador++} />
      <Button text={"I'm button " + contador++} />
      <ShowFruts fruts={fruts} />
      <ShowFruts fruts={frutsTwo} />
    </>
  );
};

export default App;
