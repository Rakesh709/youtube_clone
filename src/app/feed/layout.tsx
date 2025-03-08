

interface LayoutProps{
    children:React.ReactNode
}




const Layout = ({children}:LayoutProps) => {
  return (
    <div>
        <div>
            <h1 className="p-4 bg-rose-400 w-full">I am NavBar</h1>
        </div>
        {children}
    </div>
  )
};

export default Layout;
