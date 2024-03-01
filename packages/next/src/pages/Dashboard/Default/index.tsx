import type { SanitizedConfig } from 'payload/types'

import { Gutter, SetStepNav, SetViewActions } from '@payloadcms/ui'
import React from 'react'

import { DefaultDashboardClient } from './index.client'
import './index.scss'

const baseClass = 'dashboard'

export type DashboardProps = {
  Link: React.ComponentType<any>
  config: SanitizedConfig
  visibleCollections: string[]
  visibleGlobals: string[]
}

export const DefaultDashboard: React.FC<DashboardProps> = (props) => {
  const {
    Link,
    config: {
      admin: {
        components: { afterDashboard, beforeDashboard },
      },
    },
    visibleCollections,
    visibleGlobals,
  } = props

  return (
    <div className={baseClass}>
      <SetStepNav nav={[]} />
      <SetViewActions actions={[]} />
      <Gutter className={`${baseClass}__wrap`}>
        {Array.isArray(beforeDashboard) &&
          beforeDashboard.map((Component, i) => <Component key={i} />)}
        <DefaultDashboardClient
          Link={Link}
          visibleCollections={visibleCollections}
          visibleGlobals={visibleGlobals}
        />
        {Array.isArray(afterDashboard) &&
          afterDashboard.map((Component, i) => <Component key={i} />)}
      </Gutter>
    </div>
  )
}
