const [user, setUser] = React.useState<IUser | null>(null);

// later...
setUser(newUser);


const [user, setUser] = React.useState<IUser>({} as IUser);

// later...
setUser(newUser);