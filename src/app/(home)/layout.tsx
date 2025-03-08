
import { HomeLayout } from "@/modules/home/ui/layout/home-layout"

interface LayoutProps{
    children : React.ReactNode
}

const Layout= ({children}:LayoutProps) => {
  return (
    <HomeLayout>
        <div>
            {children}
        </div>
    </HomeLayout>
  )
}

export default Layout