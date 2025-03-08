import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar";


interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar/>
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};

// to use tailwinf css in module folder need to make changes in taiwindconfig gile
//"./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
