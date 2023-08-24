'use client'

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: 'NGN'
  })

  interface CurrencyProps {
    value?: string | number
  }

const Currency = ({value}: CurrencyProps) => {

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

  return (
    <div className="font-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency