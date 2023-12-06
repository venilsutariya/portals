import NavbarComp from "@/components/customUi/Navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="">
            <div className=" sticky top-0  z-50">
            <NavbarComp />
            </div>
            {children}
        </div>
     );        
}
 
export default RootLayout;      