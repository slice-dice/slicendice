import { Main } from '@/components/main'
import { Article } from '@/components/article'

import { interactiveGraphs } from '@/data/interactive-graphs'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/grafici-interattivi/${slug}.mdx`)

    return (
        <Main>
            <Article>
                <Docs />
            </Article>
        </Main>
    )
}

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    interactiveGraphs.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
