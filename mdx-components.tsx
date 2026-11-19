import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

/** Styles + internal links for blog posts written in MDX. */
const components: MDXComponents = {
  a: ({ href = '', children, ...rest }: ComponentPropsWithoutRef<'a'>) =>
    href.startsWith('/') ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
