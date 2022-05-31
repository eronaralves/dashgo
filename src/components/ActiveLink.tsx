import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean 
}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) {
  const {asPath} = useRouter()

  let IsActive = false

  if((asPath.startsWith(String(rest.href))) ||  (asPath.startsWith(String(rest.href)))) {
    IsActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: IsActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}