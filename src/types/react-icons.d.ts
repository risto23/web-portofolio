// Lightweight module declaration for react-icons submodules
// This lets TypeScript accept imports like `import { FaGithub } from 'react-icons/fa'`

declare module 'react-icons/*' {
  import * as React from 'react'

  // Generic icon type (SVG React component)
  // react-icons components commonly accept `size` (number|string) and `className` in addition to normal SVG props
  export type IconProps = React.SVGProps<SVGSVGElement> & { title?: string; size?: string | number; className?: string }
  export type IconType = React.ComponentType<IconProps>

  // Export a map of icon names to IconType so imported members are recognized as React components.
  const icons: { [key: string]: IconType }
  export = icons
}
