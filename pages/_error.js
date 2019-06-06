import Layout from '../components/Layout'

const Error = ({ statusCode }) => (
    <Layout title="Error!!!">
        {statusCode ? `Couldn't load your user data: Status Code ${statusCode}` : 'Couldn\'t get that page, sorry!'}
    </Layout>
)

export { Error as default }