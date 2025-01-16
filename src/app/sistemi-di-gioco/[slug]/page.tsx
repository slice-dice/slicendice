import { gameplaySystems } from '@/data/gameplay-systems'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const { default: Docs } = await import(`../../../../docs/sistemi-di-gioco/${slug}.mdx`)

    return (
        <article className="prose lg:prose-xl">
            <Docs />
        </article>
    )
}

export function generateStaticParams() {
    const slugs: { slug: string }[] = []

    gameplaySystems.forEach(({ url }) => {
        slugs.push({ slug: url })
    })

    return slugs
}

export const dynamicParams = false
