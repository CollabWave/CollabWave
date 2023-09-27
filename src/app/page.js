import Image from "next/image";
import styles from "./page.module.css";
import { WebgiViewer } from "@/components/WebgiViewer";
import { PhoneModel } from "@/components/PhoneModel";

export default function Home() {
  return (
    <div style={{ height: "10000px" }} >
      <PhoneModel />
    </div>
  );
}
