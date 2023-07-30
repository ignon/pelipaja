import * as React from 'react'
import { useState } from 'react'
import Toggle from '../components/Toggle'
import Card from '../components/Card'
import analytics from '../analytics'

const TITLE = 'Koodimatskut';

const HeaderCard = ({ children }: {
  children: any
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDomain, setShowDomain] = useState(false);

  const title = (!showDomain)
    ? 'Koodimatskut'
    : 'Koodimatskut.fi'

  return (
    <div className="flex flex-col justify-start align-center my-4 w-full px-2">
      <h1
        className="text-center mt-7 text-6xl font-extrabold text-gray-600"
        onClick={() => setShowDomain(!showDomain)}
      >
        {title}
      </h1>
      <p className="text-center mt-7 mb-5 mx-3 text-lg text-gray-800">
        Koodimatskut.fi on tarkkaan valikoitu lista ohjelmoinnin pelillisiä harjoituksia organisoituna järkevään etenemisjärjestykseen.
      </p>

      <Toggle
        text="Opettajalle"
        isOpen={false}
        onClick={() => {
          if (!isOpen) {
            analytics.sendEvent('ForTeacher', { cardSlug: 'opettajalle' })
          }
          setIsOpen(!isOpen)
        }}
        className="py-3 text-gray-500"
      />

      {!isOpen || (
        <Card>
          <div className="bg-red-400 py-5 w-full">
            <h1 className="text-center text-4xl font-extrabold text-gray-700">Opettajan materiaalit</h1>
          </div>
          <div className="text-lg text-gray-800 my-8 px-3 py-3">
            {children}
          </div>
        </Card>
      )}

    </div>
  )
}

export default HeaderCard;
