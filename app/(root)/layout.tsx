import NavbarComp from "@/components/customUi/Navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className=" relative">
            <div className="absolute w-full">
            <NavbarComp />
            </div>
            {children}
        </div>
     );        
}
 
export default RootLayout;      