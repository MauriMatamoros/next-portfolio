import React from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Error from './_error'

class About extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/MauriMatamoros')
        const statusCode = res.status > 200 ? res.status : false
        const user = await res.json()
        return { user, statusCode }
    }
    render() {
        const { user, statusCode } = this.props
        if (statusCode) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Mauricio" height="200px" />
            </Layout>
        )
    }
}

export { About as default }