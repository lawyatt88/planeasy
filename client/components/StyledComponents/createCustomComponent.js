import React from 'react'
import {
  Row as BsRow,
  Tabs as BsTabs,
  Tab as BsTab,
  Nav as BsNav,
  NavItem as BsNavItem,
  Col as BsCol
} from 'react-bootstrap'
import {bootstrapUtils} from 'react-bootstrap/lib/utils'

const addCustomStyle = ({BsComponent}) => ({
  children,
  className,
  ...restProps
}) => {
  if (className) {
    if (BsComponent === BsCol || BsComponent === BsRow) {
      return (
        <BsComponent className={className.toString()} {...restProps}>
          {children}
        </BsComponent>
      )
    }
    bootstrapUtils.addStyle(BsComponent, ` ${className.toString()}`)
    return (
      <BsComponent bsStyle={` ${className.toString()}`} {...restProps}>
        {children}
      </BsComponent>
    )
  }
  return <BsComponent {...restProps}>{children}</BsComponent>
}

export const Tabs = addCustomStyle({
  BsComponent: BsTabs
})
export const Tab = addCustomStyle({
  BsComponent: BsTab
})
export const Nav = addCustomStyle({
  BsComponent: BsNav
})
export const NavItem = addCustomStyle({
  BsComponent: BsNavItem
})

export const Col = addCustomStyle({
  BsComponent: BsCol
})

export const Row = addCustomStyle({
  BsComponent: BsRow
})
