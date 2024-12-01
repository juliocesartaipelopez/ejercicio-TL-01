import Image from "next/image";
import { Header } from "./components/Header";
import Content01 from "./components/Content-01";
import { Content02 } from "./components/Content-02";
import Content03 from "./components/Content-03";
import { Content04 } from "./components/Content-04";
import { Content05 } from "./components/Content-05";
import { Fooder } from "./components/Fooder";

export default function Home() {
  return (
    <div>
      <Header/>
      <Content01/>
      <Content02/>
      <Content03/>
      <Content04/>
      <Content05/>
      <Fooder/> 
    </div>
  );
}
