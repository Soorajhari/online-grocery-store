import { Button } from "@/components/ui/button";
import Sliders from "./_components/Sliders";
import Image from "next/image";
import GlobalApi from "./_utils/GlobalApi";

export default async  function Home() {
  const sliderList=await GlobalApi.getSlider()
  return (
 <div>
<Sliders sliderList={sliderList}/>
 </div>
  );
}
