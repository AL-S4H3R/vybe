import React from 'react'
import { useWeb3 } from '../context/Web3Context'

const WalletConnect: React.FC = () => {

    const { ethAccount, web3Instance, getAccount } = useWeb3()
    return(
        <div className="h-screen w-screen bg-gray-200">
            <p>Your account: {ethAccount}</p>
            <button onClick={getAccount}>Connect</button>
        </div>
    )
}

export default WalletConnect