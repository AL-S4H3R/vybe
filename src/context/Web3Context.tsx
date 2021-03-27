import React, { createContext, useContext } from 'react'
import Web3 from 'web3'
import { connectToPortis, getEthAccount } from '../api/web3'

interface Web3State {
    ethAccount: string;
    web3Instance: Web3 | null;
    getAccount: () => Promise<void> | null
}

const initialState: Web3State = {
    ethAccount: '',
    web3Instance: null,
    getAccount: () => null
}

const Web3Context = createContext(initialState)

export const useWeb3 = () => {
    return useContext(Web3Context)
}

const Web3ContextProvider: React.FC = ({children}) => {

    const [ethAccount, setEthAccount] = React.useState('')
    const [web3Instance, setWeb3Instance] = React.useState<Web3 | null>(null)
    
    const getAccount = async () => {
        const web3 = await connectToPortis()
        setWeb3Instance(web3)
        const account = await getEthAccount(web3)
        setEthAccount(account)
    }

    const values: Web3State = {
        ethAccount: ethAccount,
        web3Instance: web3Instance,
        getAccount,  
    } 

    return(
        <Web3Context.Provider value={values}>
            {children}
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider