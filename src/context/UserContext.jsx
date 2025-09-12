// context/UserContext.jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "JohnDoe",
        email: "1234@example.com",
        skills: [],
    });

    const addSkill = (skill) => {
        setUser((prev) => ({
            ...prev,
            skills: [...prev.skills, skill],
        }));
    };
     const removeSkill = (skill) => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (s) => s.toLowerCase() !== skill.toLowerCase()
      ),
    }));
  };

    return (
        <UserContext.Provider value={{ user,setUser, addSkill , removeSkill }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
