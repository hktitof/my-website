import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
export default function Home() {
  return (
    <div className="relative h-screen bg-AAprimary w-full ">
      <Startup/>
      <Header />
     
    </div>
  );
}
