// dateInput ex: 2023-11-28T14:09:29.628Z => 28/11/2023 21:09
export const dateTransformToDateTimeFormated = (dateInput: string) => {
    const parsedTime = new Date(dateInput);

    // Định dạng lại thời gian theo yêu cầu (28/11/2023 21:09)
    const DateTimeFormated =
        `${parsedTime.getDate()}/${
            parsedTime.getMonth() + 1
        }/${parsedTime.getFullYear()} ` +
        `${parsedTime.getHours()}:${
            parsedTime.getMinutes() < 10
                ? `0${parsedTime.getMinutes()}`
                : parsedTime.getMinutes()
        }`;

    return DateTimeFormated;
};
