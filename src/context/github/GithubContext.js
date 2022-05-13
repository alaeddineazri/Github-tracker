import axios from 'axios';
import {createContext, useState} from 'react';

const GithubContext = createContext();


const GITHUB_URL =process.env.REACT_APP_API_URL
const GITHUB_TOKEN =process.env.REACT_APP_API_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const res = await axios(`${GITHUB_URL}/users`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });
        setUsers(res.data);
        setLoading(false);
    }


    return (
        <GithubContext.Provider value={{
            users,
            loading,
            fetchUsers
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext;
