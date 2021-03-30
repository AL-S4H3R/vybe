import React from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {

    const { user, logout } = useAuth()
    const history = useHistory()

    return(
        <div>
            <nav className="px-8 py-4">
                <h1 className="text-xl underline text-center font-mono text-gray-700">welcome to vybe</h1>
            </nav>
            <section className="font-mono px-8 py-4 space-y-8 text-gray-700">
                <div>
                    <p className="text-center text-2xl">With Vybe, you can mint your digital NFT's (all for $0.)</p>
                </div>
                <div>
                    <p className="text-center text-2xl">If you use Figma, you can directly drop in the figma URL and we'll create a token for you.</p>
                </div>
                <p className="text-center">
                    Thank you for vybing!!
                </p>
                <p className="text-center text-lg font-semibold">
                    App Goes Live Soon
                </p>
                <footer>
                    <button onClick={async () => {
                        await logout()
                        history.push('/')
                    }}>Sign out</button>
                </footer>
            </section>
        </div>
    )
}

export default Dashboard