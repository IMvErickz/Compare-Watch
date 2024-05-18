import { useEffect, useState } from "react";

interface FavsProps{
    id: string
}

interface UserProps {
    name: string,
    email: string,
    favs: FavsProps[]
    accessToken: string
  }

export function useUser() {
    const [user, setUser] = useState<UserProps | null>(null)
    
    const userStorage = localStorage.getItem('user')

    useEffect(() => {
        if (userStorage) {
            const userStorageParse = JSON.parse(userStorage)
            setUser(userStorageParse)
        }
    }, [userStorage])
    

    return user
}