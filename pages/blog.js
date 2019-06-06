import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="React"/>
        </ul>
    </Layout>
)

export { Blog as default }