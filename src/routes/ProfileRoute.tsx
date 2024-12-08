import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ProfileRoute = () => {
    const { userId } = useParams(); // Get userId from URL
    const navigate = useNavigate();
    const loggedInUserId = localStorage.getItem('userID'); // Assuming userID is stored in localStorage

    useEffect(() => {
        if (userId === loggedInUserId) {
            // User is viewing their own profile, so we stay at /profile
            navigate(`/profile`);
        } else {
            // User is viewing another person's profile, so redirect to /profile/:userId
            navigate(`/profile/${userId}`);
        }
    }, [userId, loggedInUserId, navigate]);

    return null;
};
