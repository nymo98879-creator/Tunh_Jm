import Mainlayout from "./layout/Mainlayout";
import { BrowserRouter } from "react-router-dom";
export default function App(){
  return (
    <>
      <BrowserRouter>
        <Mainlayout />
      </BrowserRouter>
    </>
  );
}