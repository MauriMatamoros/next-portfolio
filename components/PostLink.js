import React from 'react'
import Link from 'next/link'

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={slug} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export { PostLink as default }