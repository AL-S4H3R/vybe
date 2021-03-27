import React from 'react'
import Web3 from 'web3'

const Web3Context = React.createContext({
    ethAccount: '',
    web3Instance: Web3
})

export const useWeb3 = () => {
    return React.useContext(Web3Context)
}

const Web3ContextProvider: React.FC = ({children}) => {
    
    const [ethAccount, setEthAccount] = React.useState('')

    const values = {
        ethAccount,
        web3Instance: Web3
    }

    return(
        <Web3Context.Provider value={values}>
            {children}
        </Web3Context.Provider>
    )
}

export default Web3Context