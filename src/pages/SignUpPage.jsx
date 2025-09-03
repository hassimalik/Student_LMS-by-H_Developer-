import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            // outer card
            card: "bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-800 p-8 w-[400px]",

            // header
            headerTitle: "text-white text-3xl font-extrabold tracking-tight text-center",
            headerSubtitle: "text-gray-400 text-sm text-center mt-2",

            // input fields
            formField: "mb-4", // spacing between fields
            formFieldLabel: "text-gray-300 text-sm mb-1 font-medium",
            formFieldInput:
              "bg-gray-800/70 text-white placeholder-gray-500 rounded-lg px-4 py-2 text-sm shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none transition",

            // primary button
            formButtonPrimary:
              "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition duration-200",

            // footer links
            footerActionLink:
              "text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm",

            // social buttons (google, github, etc.)
            socialButtonsBlockButton:
              "bg-gray-800/70 text-white hover:bg-gray-700 border border-gray-700 rounded-lg py-2 px-4 transition shadow-md",
            socialButtonsBlockButtonText: "text-sm font-medium",
          },
          variables: {
            colorBackground: "transparent",
            colorText: "white",
            colorPrimary: "#6366f1", // Indigo
            colorInputBackground: "#1f2937", // gray-800
          },
        }}
      />
    </div>
  );
}
