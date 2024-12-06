export const formatDateDifference = (createdAt: string) => {
    const createdDate = new Date(createdAt); // The date when the post was created
    const currentDate = new Date();  // The current date

    // Calculate the difference in time between currentDate and createdDate
    const diffInMilliseconds = currentDate.getTime() - createdDate.getTime();

    // Calculate the difference in full days
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 3600 * 24));

    // If the difference is less than a day, calculate in hours
    if (diffInDays < 1) {
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 3600));
        if (diffInHours < 1) {
            // If less than an hour, calculate in minutes
            const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
            return `${diffInMinutes} phút${diffInMinutes > 1 ? "s" : ""} trước`;
        }
        return `${diffInHours} giờ${diffInHours > 1 ? "" : ""} trước`;
    }

    // Calculate difference in months and years for longer periods
    const diffInMonths = Math.floor(diffInDays / 30);  // Approximate months
    const diffInYears = Math.floor(diffInDays / 365);  // Approximate years

    // Display the result based on the difference
    if (diffInDays < 30) {
        return `${diffInDays} ngày${diffInDays > 1 ? "s" : ""} trước`;
    } else if (diffInMonths < 12) {
        return `${diffInMonths} tháng${diffInMonths > 1 ? "s" : ""} trước`;
    } else {
        return `${diffInYears} năm${diffInYears > 1 ? "s" : ""} trước`;
    }
};
