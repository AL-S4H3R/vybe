import Web3 from 'web3'
import Portis from '@portis/web3'

const connectToPortis = async () => {
    const portis = new Portis('efa76be7-71f3-4b3f-a49a-5cccae6dfaf7', 'maticMumbai')    
    const web3 = new Web3(portis.provider)
    return web3
}

const getEthAccount = async (web3: Web3) => {
    try {
        var accounts = await web3.eth.getAccounts()
        var ethAccount = accounts[0]
        console.log(ethAccount)
        return ethAccount
    }
    catch(err){
        console.error(err)
        return err
    }
}

export { connectToPortis, getEthAccount}