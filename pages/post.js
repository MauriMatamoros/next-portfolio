import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: '80vw'}}>Do enim non duis elit exercitation. Et in excepteur irure occaecat ad pariatur amet dolor. Ipsum laborum labore ullamco do quis. Veniam sit officia laborum sint laborum nisi in duis Lorem magna duis nisi laboris laborum. Aliqua aliquip quis laborum reprehenderit mollit ullamco cupidatat proident sint nostrud incididunt duis. Mollit irure nostrud sit et consectetur dolore eiusmod elit aute esse veniam proident esse.</p>
    </Layout>
)

export default withRouter(Post) 