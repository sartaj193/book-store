import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authcontext"; // Ensure this hook is working properly
import "./your.styles.css"; // Add your styles here

const YourComponent = () => {
  const { user, fetchUserData } = useAuth(); // Ensure fetchUserData exists in your context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetchUserData(); // Call this to fetch user info from API or storage
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchUser();
  }, [fetchUserData]);

  console.log("Current user:", user);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="your-component-container">
      {user ? (
        <p>Welcome, {user.email || user.name}</p> // Ensure `user.email` or `user.name` exists
      ) : (
        <p>Please log in to see your account details.</p>
      )}
    </div>
  );
};

export default YourComponent;
