// SignInPage.jsx
import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
export default function SignInPage() {
    return (
        <>
        <div className="bg-black">
            <button className="p-2 px-1 w-[9%] ml-12  bg-[#0b4f53] text-white rounded-lg cursor-pointer transition-ease duration-400 hover:scale-110">
                <Link to="/dashboardbl">
                    Dashboard
                </Link>
            </button></div>
        <div className="flex items-center  justify-center min-h-screen bg-black">
            
            <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                appearance={{
                    layout: {
                        socialButtonsVariant: "iconButton",
                    },
                    elements: {
                        card: "bg-neutral-900 shadow-2xl rounded-2xl",
                        headerTitle: "text-white",
                        headerSubtitle: "text-gray-400",
                        formFieldLabel: "text-gray-300",
                    },
                    variables: {
                        colorPrimary: "#3b82f6", // Tailwind blue-500
                        colorBackground: "black",
                        colorText: "white",
                    },
                }}
            />
        </div>
        </>

    );
}
