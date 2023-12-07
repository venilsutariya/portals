import NavbarComp from "@/components/customUi/Navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="">
            <NavbarComp />
            {children}
        </div>
     );        
}
 
export default RootLayout;      