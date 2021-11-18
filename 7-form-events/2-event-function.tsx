const handleCommissionsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as "contribution" | "management";
    const value = event.target.value === "" ? null : Number(event.target.value);

    setCommissions({
        ...commissions,
        [name]: {
            ...commissions[name],
            currentValue: value,
            derogatoryChecked: isDerogatory(value, commissions[name].initialRate),
        },
    });
};