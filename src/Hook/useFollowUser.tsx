import { useState, useEffect } from "react";

const useFollowUser = () => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); // Để hiển thị loading khi gọi API
    const [error, setError] = useState<string | null>(null); // Để hiển thị lỗi nếu có

    const token = localStorage.getItem("authToken"); // Lấy token từ localStorage

    useEffect(() => {
        const checkRelationship = async (userId: string, targetUserId: string) => {
            setLoading(true);
            try {
                const response = await fetch(`https://dacnbe.onrender.com/relationship/getRelationShipTowardOneUser?user1=${userId}&user2=${targetUserId}`, {
                    method: "GET",
                    headers: {
                        
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Connection": "keep-alive",
                        "token": `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    // Kiểm tra kết quả trả về, nếu có relationship và là "following"
                    if (data.relationship === "following") {
                        setIsFollowing(true);
                    } else {
                        setIsFollowing(false);
                    }
                } else {
                    setError("Failed to fetch relationship data");
                }
            } catch (error) {
                setError("Error checking relationship");
            } finally {
                setLoading(false);
            }
            return checkRelationship
        };

    }, [token]);

    const followUser = async (userId: string | null, targetUserId: string) => {
        if (userId !== targetUserId) {
            try {
                const response = await fetch("https://dacnbe.onrender.com/relationship/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Connection": "keep-alive",
                        "token": `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                    },
                    body: JSON.stringify({
                        user1: userId,
                        user2: targetUserId,
                        relationship: "following"
                    }),
                });

                if (response.status === 200) {
                    setIsFollowing(prevState => !prevState); // Toggle trạng thái theo dõi
                } else {
                    console.error("Failed to follow the user");
                }
            } catch (error) {
                console.error("Error following user:", error);
            }
        }
    };

    return { isFollowing, followUser, loading, error };
};

export default useFollowUser;
