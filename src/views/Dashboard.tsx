import React from 'react'
import { Link } from 'react-router-dom'
import ShareSocial from '../components/dashboard/ShareSocial'
import { firebaseRef } from '../config/firebase'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {

    const { user, logout } = useAuth()
    const [username, setUserName] = React.useState<any>()

    React.useEffect(() => {
        getUsername()
    },[])

    const getUsername = async () => {
        var res = await firebaseRef.collection('users').doc(user?.uid).get()
        console.log(res.data())
        if(res.data()){
            //@ts-ignore
            setUserName(res.data().username)
        }
    }
    return(
        <div>
            <nav className="px-8 py-4 flex justify-center lg:px-16 space-x-8">
                <h1 className="text-xl underline text-center font-mono text-gray-700">
                     welcome to vybe
                </h1>
                <button onClick={logout}>
                    Logout
                </button>
            </nav>
            <div className="lg:flex lg:justify-center">
            <section className="font-mono px-8 py-4 space-y-8 text-gray-700 lg:w-1/3">
                <div>
                    <h3 className="text-center">Hello @{username}</h3>
                </div>
                <div>
                    <p className="text-center text-2xl">With Vybe, you can mint your digital NFT's (all for $0.)</p>
                </div>
                <div>
                    <p className="text-center text-2xl">If you use Figma, you can directly drop in the figma URL and we'll create a token for you.</p>
                </div>
                <p className="text-center text-md underline font-semibold">
                    <Link to="/add">
                        Try out our demo feature: Figma to NFT's
                    </Link>
                </p>
            </section>
            </div>
            <div className="flex justify-center">
                <ShareSocial />
            </div>
        </div>
    )
}

export default Dashboard