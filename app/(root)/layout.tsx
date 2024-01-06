import NavbarComp from "@/components/customUi/Navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className=" relative">
            <div className=" absolute w-full">
            </div>
            {children}
        </div>
    );
}

export default RootLayout;